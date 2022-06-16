using Xunit;
using QureProject.Models;
using System.Linq;

namespace QureProj_Tests {
	public class MethodTests {
		[Theory]
		[InlineData("text for tests, switching lines only")]
		[InlineData("unit testing is the main skill")]
		[InlineData("every programmer should have")]
		public void AddLines_convertsStringToLines(string lines) {
			// Arrange
			BookModel bookForTest = new BookModel();
			bookForTest.AddLines(lines);
			string[] expected = lines.Split(' ');

			// Act
			bookForTest.AddLines(lines);
			string[] actual = bookForTest.Lines.ToArray();

			// Assert
			Assert.Equal(expected, actual);
		}

		[Fact]
		public void SetId_SetsRightId() {
			// Arrange
			ReadingModel testRead1 = new ReadingModel(new BookModel("text for tests"));
			ReadingModel testRead2 = new ReadingModel(new BookModel("text for tests"));
			ReadingModel testRead3 = new ReadingModel(new BookModel("text for tests"));
			int expected = Reads.AllReads.IndexOf(Reads.AllReads.Last());

			// Act
			int actual = testRead3.Id;

			// Assert
			Assert.Equal(expected, actual);
		}

		[Theory]
		[InlineData("text for tests, switching lines only")]
		[InlineData("unit testing is the main skill")]
		[InlineData("every programmer should have")]
		public void SwitchALine_SwitchingLines(string lines) {
			// Arrange
			BookModel bookForTest = new BookModel();
			bookForTest.AddLines(lines);
			ReadingModel testRead = new ReadingModel(bookForTest);
			string actual;
			string expected = lines.Split(' ')[1];

			// Act
			testRead.SwitchALine();
			actual = testRead.currLine;

			// Assert
			Assert.Equal(expected, actual);
		}
	}
}