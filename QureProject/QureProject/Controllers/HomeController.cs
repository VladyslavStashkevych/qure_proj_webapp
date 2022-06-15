using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using QureProject.Models;

namespace QureProject.Controllers {
	public class HomeController : Controller {
		private readonly ILogger<HomeController> _logger;
		private readonly IWebHostEnvironment _environment;

		public HomeController(ILogger<HomeController> logger, IWebHostEnvironment environment) {
			_logger = logger;
			_environment = environment;
		}

		public IActionResult Index() {
			const string cookieName = "theme";
			if (Request.Cookies[cookieName] is null) {
				Response.Cookies.Append(cookieName, "dark");
			}
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error() {
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}

		//[BindProperty]
		//public IFormFile Upload { get; set; }
		//[HttpPost]
		//public  IActionResult OnPostAsync() {
		//	Redirect("https://artemsadovenko.atlassian.net/jira/software/projects/QUR/boards/2/backlog?selectedIssue=QUR-28");
		//	var file = Path.Combine(_environment.ContentRootPath, "uploads", Upload.FileName);
		//	//using (var fileStream = new FileStream(file, FileMode.Create)) {
		//	//	await Upload.CopyToAsync(fileStream);
		//	//}
		//	return RedirectToAction("Index");
		//}

	}
}