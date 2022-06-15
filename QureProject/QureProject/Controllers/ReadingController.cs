using System.Threading;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QureProject.Models;

namespace WebApplication1.Controllers {
	public class ReadingController : Controller {
		ReadingModel? _read;

		// GET: ReadingController
		public ActionResult Index(string id) {
			BookModel book = new BookModel {
				Author = "Вільям Шекспір",
				Name = "Ромео і Джульєтта",
				Text = @""
			};
			book.AddLines(@"fsdgshd");
			_read = new ReadingModel(book);

			book = new BookModel {
				Author = "Френсіс Скотт Фіцджеральд",
				Name = "Великий Ґетсбі",
				Text = @""
			};
			book.Lines = new List<string>();
			book.AddLines("dd jjkk");
			_read = new ReadingModel(book);
				
			if (id is not null)
				_read = Reads.AllReads.First(x => x.Id.ToString() == id);
			else
				_read = Reads.AllReads.First();

			//const string cookieName = "text";
			//if (Request.Cookies[cookieName] is null) {
			//	Response.Cookies.Append(cookieName, _read._book.Text);
			//}

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
