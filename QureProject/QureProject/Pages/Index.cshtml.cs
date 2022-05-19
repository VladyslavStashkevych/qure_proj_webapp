using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Collections.ObjectModel;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace QureProject.Pages {
	public class IndexModel : PageModel {
		private readonly ILogger<IndexModel> _logger;
		private readonly IWebHostEnvironment _environment;

		public IndexModel(ILogger<IndexModel> logger, IWebHostEnvironment environment) {
			_logger = logger;
			_environment = environment;
		}

		public void OnGet() {
			const string cookieName = "theme";
			if (Request.Cookies[cookieName] is null) {
				Response.Cookies.Append(cookieName, "dark");
			}
		}

		[BindProperty]
		public IFormFile Upload { get; set; }
		public async Task OnPostAsync() {
			var file = Path.Combine(_environment.ContentRootPath, "uploads", Upload.FileName);
			using (var fileStream = new FileStream(file, FileMode.Create)) {
				await Upload.CopyToAsync(fileStream);
			}
		}
	}
}
