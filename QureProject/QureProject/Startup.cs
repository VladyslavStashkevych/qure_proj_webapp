namespace QURE {
	public class Startup {
		public void ConfigureServices(IServiceCollection services) {
			services.Configure<CookiePolicyOptions>(options => {
				options.CheckConsentNeeded = context => true;
				options.MinimumSameSitePolicy = SameSiteMode.Strict;
			});

			services.AddRouting(options => options.LowercaseUrls = true);
			services.AddRazorPages();
			services.AddHttpContextAccessor();
		}

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
			if (env.IsDevelopment()) {
				app.UseDeveloperExceptionPage();
			}
			else {
				throw new NotImplementedException();
			}

			app.UseCookiePolicy();
			app.UseHttpsRedirection();
			app.UseStaticFiles();

			app.UseRouting();

			app.UseAuthorization();

			app.UseEndpoints(endpoints => {
				endpoints.MapRazorPages();
			});
		}
	}
}