var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<CookiePolicyOptions>(options => {
	options.CheckConsentNeeded = context => true;
	options.MinimumSameSitePolicy = SameSiteMode.Unspecified;
	options.OnAppendCookie = cookieContext =>
			CheckSameSite(cookieContext.Context, cookieContext.CookieOptions);
	options.OnDeleteCookie = cookieContext =>
		CheckSameSite(cookieContext.Context, cookieContext.CookieOptions);
});

builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment()) {
	app.UseExceptionHandler("/Shared/Error");
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseCookiePolicy();
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
	name: "default",
	pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();


void CheckSameSite(HttpContext httpContext, CookieOptions options) {
	if (options.SameSite == SameSiteMode.None) {
		var userAgent = httpContext.Request.Headers["User-Agent"].ToString();
		if (DisallowsSameSiteNone(userAgent)) {
			options.SameSite = SameSiteMode.Unspecified;
		}
	}
}

static bool DisallowsSameSiteNone(string userAgent) {
	// Check if a null or empty string has been passed in, since this
	// will cause further interrogation of the useragent to fail.
	if (String.IsNullOrWhiteSpace(userAgent))
		return false;

	// Cover all iOS based browsers here. This includes:
	// - Safari on iOS 12 for iPhone, iPod Touch, iPad
	// - WkWebview on iOS 12 for iPhone, iPod Touch, iPad
	// - Chrome on iOS 12 for iPhone, iPod Touch, iPad
	// All of which are broken by SameSite=None, because they use the iOS networking
	// stack.
	if (userAgent.Contains("CPU iPhone OS 12") ||
		userAgent.Contains("iPad; CPU OS 12")) {
		return true;
	}

	// Cover Mac OS X based browsers that use the Mac OS networking stack. 
	// This includes:
	// - Safari on Mac OS X.
	// This does not include:
	// - Chrome on Mac OS X
	// Because they do not use the Mac OS networking stack.
	if (userAgent.Contains("Macintosh; Intel Mac OS X 10_14") &&
		userAgent.Contains("Version/") && userAgent.Contains("Safari")) {
		return true;
	}

	// Cover Chrome 50-69, because some versions are broken by SameSite=None, 
	// and none in this range require it.
	// Note: this covers some pre-Chromium Edge versions, 
	// but pre-Chromium Edge does not require SameSite=None.
	if (userAgent.Contains("Chrome/5") || userAgent.Contains("Chrome/6")) {
		return true;
	}

	return false;
}