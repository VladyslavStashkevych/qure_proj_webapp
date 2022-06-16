using System.Linq;
using System.Collections.Generic;
namespace QureProject.Models {
	public class BookModel {
		public string Name { get; set; }
		public string Author { get; set; }
		public List<string> Lines { get; set; }
		public string Text { get; set; }

		public BookModel() {
			Name = "Untitled";
			Author = "Me";
			Lines = new List<string>();
			Text = "ll";
		}
		public BookModel(string lines) {
			Name = "Untitled";
			Author = "Me";
			Lines = lines.Split(' ').ToList();
			Text = "ll";
		}

		public void AddLines(string lines) {
			if (lines == null) {
				throw new ArgumentNullException(lines);
			}
			Lines = lines.Split(' ').ToList();
		}
	}
}
