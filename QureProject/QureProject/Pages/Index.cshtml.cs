using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Collections.ObjectModel;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace QureProject.Pages {
	public class IndexModel : PageModel {
		private readonly ILogger<IndexModel> _logger;

		public IndexModel(ILogger<IndexModel> logger) {
			_logger = logger;
		}

		public void OnGet() {
			const string cookieName = "theme";
			if (Request.Cookies[cookieName] is null) {
				Response.Cookies.Append(cookieName, "dark");
			}
		}
	}
}
