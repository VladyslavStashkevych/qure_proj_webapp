var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<CookiePolicyOptions>(options => {
	options.CheckConsentNeeded = context => true;
	options.MinimumSameSitePolicy = SameSiteMode.Strict;
});
builder.Services.AddRazorPages();



var app = builder.Build();

if (!app.Environment.IsDevelopment()) {
	app.UseHsts();
}

app.UseCookiePolicy();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
