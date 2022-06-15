using System.Threading;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QureProject.Models;

namespace WebApplication1.Controllers {
	public class ReadingController : Controller {
		ReadingModel? _read;

		// GET: ReadingController
		public ActionResult Index(string id) {
			if (id is not null)
				_read = Reads.AllReads.First(x => x.Id.ToString() == id);
			else if (_read is null) {
				BookModel book = new BookModel {
					Author = "Me",
					Name = "Gabriela",
					Text =    @"Gabriela worked for a multinational cumpany as a successful project manager in Brazil and was transferred"
				};
				book.AddLines(@"Gabriela worked for a multinational cumpany as a successful project manager in Brazil and was transferred");
				_read = new ReadingModel(book);
			}
			else
				_read = Reads.AllReads.First();

			const string cookieName = "text";
			if (Request.Cookies[cookieName] is null) {
				Response.Cookies.Append(cookieName, _read._book.Text);
			}

			return View();
		}

		// POST: ReadingController/Edit/5
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
