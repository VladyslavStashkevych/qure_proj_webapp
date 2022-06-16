using System.Threading;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QureProject.Models;

namespace WebApplication1.Controllers {
	public class ReadingController : Controller {
		ReadingModel? _read;

		// GET: ReadingController/0
		public ActionResult Index(int? id) {
			ViewBag.Id = id ?? -1;

			//const string cookieName = "text";
			//if (Request.Cookies[cookieName] is null) {
			//	Response.Cookies.Append(cookieName, _read._book.Text);
			//}
			ViewBag.Text = System.IO.File.ReadAllText($"../books/{id}.txt");

			return View();
		}

		// POST: ReadingController/Switch/5
		[HttpPost]
		[ValidateAntiForgeryToken]
		public ActionResult Switch(string id) {
			if (id is not null)
				_read = Reads.AllReads.First(x => x.Id.ToString() == id);
			else
				_read = Reads.AllReads.First();
			if (_read is null)
				return View("Index");
			_read.SwitchALine();
			ViewBag.prevLine = _read.prevLine;
			ViewBag.currLine = _read.currLine;
			ViewBag.nextLine = _read.nextLine;
			return RedirectToAction("Index", "Reading", new { id = _read.Id });
		}
	}
}
