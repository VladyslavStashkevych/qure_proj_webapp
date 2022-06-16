using System.Collections.Immutable;
using Microsoft.AspNetCore.Mvc;

namespace QureProject.Models {
	public class ReadingModel {
		public int Id { get; private set; }
		public readonly BookModel _book;
		int _lineCount;
		public string? prevLine { get; set; }
		public string  currLine { get; set; }
		public string? nextLine { get; set; }

		public ReadingModel(BookModel book) {
			_book = book;
			currLine = _book.Lines?.First() ?? "The book is empty";
			nextLine = _book.Lines?.Skip(_lineCount + 1).FirstOrDefault();
			_lineCount = 1;
			this.SetId();
		}
		public void SetId() {
			this.Id = Reads.AllReads.IndexOf(Reads.AllReads.LastOrDefault()) + 1;
			Reads.AllReads.Add(this);
		}
		public void SwitchALine() {
			prevLine = currLine;
			currLine = nextLine is null ? "" : nextLine;
			nextLine = _book.Lines?.Skip(_lineCount + 1).FirstOrDefault();
			_lineCount++;
		}
	}
	public static class Reads {
		private static List<ReadingModel> allReads = new List<ReadingModel>();

		public static List<ReadingModel> AllReads { get => allReads; set => allReads = value; }
	}
}
