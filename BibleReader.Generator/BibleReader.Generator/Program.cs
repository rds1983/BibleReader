using System;
using System.Linq;
using System.Collections.Generic;

namespace BibleReader.Generator
{
	class MainClass
	{
		private static readonly Book[] _books =new[]
		{
			new Book("Gen", 50),
			new Book("Ex", 40),
			new Book("Lev", 27),
			new Book("Num", 36),
			new Book("Deut", 34),
			new Book("Nav", 24),
			new Book("Judg", 21),
			new Book("Ruth", 4),
			new Book("1Sam", 31),
			new Book("2Sam", 24),
			new Book("1King", 22),
			new Book("2King", 25),
			new Book("1Chron", 29),
			new Book("2Chron", 36),
			new Book("Ezr", 10),
			new Book("Nehem", 13),
			new Book("2Ezr", 9),
			new Book("Tov", 14),
			new Book("Judf", 16),
			new Book("Est", 10),
			new Book("1Mak", 16),
			new Book("2Mak", 15),
			new Book("3Mak", 7),
			new Book("3Ezr", 16),
			new Book("Job", 42),
			new Book("Ps", 151),
			new Book("Prov", 31),
			new Book("Eccl", 12),
			new Book("Song", 8),
			new Book("Solom", 19),
			new Book("Sir", 51),
			new Book("Is", 66),
			new Book("Jer", 52),
			new Book("Lam", 5),
			new Book("pJer", 1),
			new Book("Bar", 5),
			new Book("Ezek", 48),
			new Book("Dan", 14),
			new Book("Hos", 14),
			new Book("Joel", 3),
			new Book("Am", 9),
			new Book("Avd", 1),
			new Book("Jona", 4),
			new Book("Mic", 7),
			new Book("Naum", 3),
			new Book("Habak", 3),
			new Book("Sofon", 3),
			new Book("Hag", 2),
			new Book("Zah", 14), 
			new Book("Mal", 4),

			new Book("Mt", 28),
			new Book("Mk", 16),
			new Book("Lk", 24),
			new Book("Jn", 21),
			new Book("Act", 28),
			new Book("Jac", 5),
			new Book("1Pet", 5),
			new Book("2Pet", 3),
			new Book("1Jn", 5),
			new Book("2Jn", 1),
			new Book("3Jn", 1),
			new Book("Juda", 1),
			new Book("Rom", 16),
			new Book("1Cor", 16),
			new Book("2Cor", 13),
			new Book("Gal", 6),
			new Book("Eph", 6),
			new Book("Phil", 4),
			new Book("Col", 4),
			new Book("1Thes", 5),
			new Book("2Thes", 3),
			new Book("1Tim", 6),
			new Book("2Tim", 4),
			new Book("Tit", 3),
			new Book("Phlm", 1),
			new Book("Hebr", 13),
			new Book("Apok", 22)
		};

		private static readonly string[] _OldCovenantReadings = new[]
		                                                 	{
																"Gen", "Ex", "Lev", "Num", "Deut", "Nav", "Judg",
																"1Sam", "2Sam", "1King", "2King", "1Chron", "2Chron",
																"Ezr", "Nehem", "Est", "Is", 
																"Jer", "Lam", "pJer", "Bar", 
																"Jer", "Lam", "pJer", "Bar", 
																"Ezek", "Dan", "Hos", "Joel", 
																"Am", "Avd", "Jona", "Mal"
		                                                 	};

		private static readonly string[] _NewCovenantReadings = new[]
		                                                 	{
																"Mt", "Mk", "Lk", "Jn", "Act",
																"1Pet", "2Pet", "1Jn", "2Jn", "3Jn",
																"Juda", "Rom", "1Cor", "2Cor",
																"Gal", "Eph", "Phil", "Col",
																"1Thes", "2Thes", "1Tim", "2Tim",
																"Tit", "Phlm", "Hebr", "Apok",
																"Mt", "Mk", "Lk", "Jn", "Apok",
		                                                 	};

		private static readonly string[] _additionalReadings = new[]
		                                                 	{
																"Prov", "Eccl", "Song", "Ps", "Job",
																"Solom", "Sir", "Tov", "Judf", "1Mak",
																"Mic", "Naum", "Habak", "Sofon", "Hag"
		                                                 	};

		private static Book GetBookByName(string name)
		{
			return (from book in _books where book.Name == name select book).FirstOrDefault();
		}

		private static Chain BuildChain(IEnumerable<string> readings)
		{
			var books = new List<Book>();
			foreach (var r in readings)
			{
				var book = GetBookByName(r);

				if (book == null)
				{
					throw new Exception(string.Format("Could not find book '{0}'", r));
				}

				books.Add(book);
			}

			return new Chain(books.ToArray());
		}

		public static void Main (string[] args)
		{
			// Old Covenant chain
			var OldCovenantChain = BuildChain(_OldCovenantReadings);
			OldCovenantChain.SetDefaultReadingSpeed(2);

			var NewCovenantChain = BuildChain(_NewCovenantReadings);
			NewCovenantChain.SetDefaultReadingSpeed(1);

			var additionalChain = BuildChain(_additionalReadings);
			additionalChain.SetDefaultReadingSpeed(1);

			var allElements = new List<ChainElement[][]>
			                  	{
			                  		OldCovenantChain.CalculateChainData(),
									NewCovenantChain.CalculateChainData(),
									additionalChain.CalculateChainData()
			                  	};

			Console.WriteLine ("var reading = [");
			var year = DateTime.Now.Year;
			for (var m = 1; m <= 12; ++m)
			{
				var monthName = new DateTime(year, m, 1).ToString("MMMM");
				Console.WriteLine(string.Format("\t// {0}", monthName));
				var daysInMonth = DateTime.DaysInMonth(year, m);
				for (var d = 1; d <= daysInMonth; ++d)
				{

					Console.Write(string.Format("\t{{ date: \"{0}/{1}\", books: \"", d, m));

					var readings = new List<string>();
					foreach (var ae in allElements)
					{
						var ce = ae[m - 1][d - 1];

						foreach(var r in ce.Readings)
						{
							readings.Add(string.Format("{0}:{1}", r.BookName, r.Chapter));
						}
					}

					Console.Write(string.Join(",", readings));

					Console.WriteLine("\" },");
				}
			}

			Console.WriteLine ("];");


			Console.ReadKey ();
		}
	}
}
