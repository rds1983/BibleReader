using System;
using System.Linq;
using System.Collections.Generic;

namespace BibleReader.Generator
{
	class MainClass
	{
		private class Book
		{
			private readonly string _name;
			private readonly int _chapters;
			private readonly int _startMonth;
			private readonly int _startDay;
			private readonly int _chaptersPerDay;

			public Book(string name, int chapters, int startMonth, int startDay, int chaptersPerDay = 1)
			{
				_name = name;
				_chapters = chapters;
				_startMonth = startMonth;
				_startDay = startDay;
				_chaptersPerDay = chaptersPerDay;
			}

			public Reading[] CalculateReadings(DateTime dt)
			{
				var readingStart = new DateTime (dt.Year, _startMonth, _startDay);
				if (dt < readingStart) {
					return new Reading [0];
				}

				int readingDays = _chapters / _chaptersPerDay;
				if (_chapters % _chaptersPerDay != 0) {
					++readingDays;
				}

				var readingEnd = readingStart.AddDays (readingDays);

				if (dt > readingEnd) {
					return new Reading [0];
				}

				var chaptersRead = ((int)(dt - readingStart).TotalDays * _chaptersPerDay);
				var chaptersLeft = _chapters - chaptersRead;
				var toRead = Math.Min (chaptersLeft, _chaptersPerDay);
				var result = new List<Reading> ();

				for(var i = chaptersRead + 1; i < chaptersRead + 1 + toRead; ++i) {
					result.Add (new Reading {
						BookName = _name,
						Chapter = i
					});
				}

				return result.ToArray ();
			}
		}

		class Reading
		{
			public string BookName {get;set;}
			public int Chapter {get;set;}
		};

		private static readonly Book[] _books =new[]
		{
			new Book("Tov", 14, 7, 12),
			new Book("Judf", 16, 7, 26),
			new Book("Job", 42, 3, 22),
			new Book("Solom", 19, 5, 3),
			new Book("Sir", 51, 5, 22),
			new Book("Is", 66, 4, 10, 2),
			new Book("Jer", 52, 5, 13, 2),
			new Book("Lam", 5, 6, 8, 2),
			new Book("pJer", 1, 6, 10),
			new Book("Bar", 5, 6, 11, 2),
			new Book("Jer", 52, 6, 13, 2),
			new Book("Lam",  5, 7, 9, 2),
			new Book("pJer", 1, 7, 11),
			new Book("Bar",  5, 7, 12, 2),
			new Book("Ezek",  48, 7, 15, 2),

			new Book("Mt", 28, 5, 21),
			new Book("Mk", 16, 6, 18),
			new Book("Lk", 24, 7, 4),
			new Book("Jn", 21, 7, 28),
			new Book("2Thes", 3, 3, 30),
			new Book("1Tim", 6, 4, 2),
			new Book("2Tim", 4, 4, 8),
			new Book("Tit", 3, 4, 12),
			new Book("Phlm", 1, 4, 15),
			new Book("Hebr", 13, 4, 16),
			new Book("Apok", 22, 4, 29)
		};

		private static IEnumerable<Reading> CalculateReadingsForDate(int month, int day)
		{
			var year = DateTime.Now.Year;
			var date = new DateTime (year, month, day);

			var result = new List<Reading> ();
			foreach (var b in _books) {
				var r = b.CalculateReadings (date);

				if (r != null && r.Length > 0) {
					result.AddRange (r);
				}
			}

			return result.ToArray ();
		}

		public static void Main (string[] args)
		{
			Console.WriteLine ("var reading = [");
			var year = DateTime.Now.Year;
			for (var m = 1; m <= 12; ++m) {
				var monthName = new DateTime (year, m, 1).ToString("MMMM");
				Console.WriteLine (string.Format ("\t// {0}", monthName));
				var daysInMonth = DateTime.DaysInMonth (year, m);
				for (var d = 1; d <= daysInMonth; ++d) {

					Console.Write(string.Format("\t{{ date: \"{0}/{1}\", books: \"", d, m));

					var readings = CalculateReadingsForDate (m, d);
					var str =
						string.Join (",",
					             (from r in readings select string.Format ("{0}:{1}", r.BookName, r.Chapter)));
					Console.Write (str);

					Console.WriteLine("\" },");
				}
			}

			Console.WriteLine ("];");


			Console.ReadKey ();
		}
	}
}
