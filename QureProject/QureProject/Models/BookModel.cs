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

		public void AddLines(string lines) {
			if (lines == null) {
				throw new ArgumentNullException(lines);
			}
			string[] tmp = lines.Split(' ');
			while (tmp is not null && tmp.Length > 0) {
				bool lengthIsAppropriate = true;
				string nextLine = "";
				while (lengthIsAppropriate || nextLine is null) {
					if ((nextLine + ' ' + tmp.FirstOrDefault()).Length > 16)
						lengthIsAppropriate = false;
					else {
						nextLine += ' ' + tmp.FirstOrDefault();
						tmp = tmp.Skip(1).ToArray();
					}
				}
				Lines.Add(nextLine);
			}
		}
	}
}
