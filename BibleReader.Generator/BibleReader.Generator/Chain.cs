using System;
using System.Collections.Generic;

namespace BibleReader.Generator
{
	public class Chain
	{
		private readonly Book[] _books;

		/// <summary>
		/// First indexer is month, second - day
		/// </summary>
		private readonly ChainElement[][] _data;

		public Chain(Book[] books)
		{
			_books = books;
			// Allocate data
			_data = new ChainElement[12][];
			var year = DateTime.Now.Year;
			for (var m = 1; m <= 12; ++m)
			{
				var daysInMonth = DateTime.DaysInMonth(year, m);
				_data[m - 1] = new ChainElement[daysInMonth];

				for(var d = 1; d <= daysInMonth; ++d)
				{
					_data[m - 1][d - 1] = new ChainElement();
				}
			}
		}

		public void SetDefaultReadingSpeed(int speed = 1)
		{
			foreach (var m in _data)
			{
				foreach (var d in m)
				{
					d.ChaptersPerDay = speed;
				}
			}
		}

		public ChainElement GetElement(int month, int day)
		{
			return _data[month - 1][day - 1];
		}

		public void SetSpecialReadingSpeed(int month, int day, int speed)
		{
			GetElement(month, day).ChaptersPerDay = speed;
		}

		public int GetReadingSpeed(int month, int day)
		{
			return GetElement(month, day).ChaptersPerDay;
		}

		public ChainElement[][] CalculateChainData()
		{
			var bookIndex = 0;
			var chapterIndex = 0;
			var year = DateTime.Now.Year;

			// We start from September as that is the way the Church year starts
			for (var m = 9; m < 9 + 12; ++m)
			{
				var month = m <= 12 ? m : m - 12;
				var daysInMonth = DateTime.DaysInMonth(year, month);

				// We start from September 14th as Church uses Julian calendar
				for (var d = 14; d < daysInMonth + 14; ++d)
				{
					var day = d <= daysInMonth ? d: d - daysInMonth;
					if (d == daysInMonth + 1)
					{
						++month;
						if (month > 12)
						{
							month = 1;
						}
					}

					var element = GetElement(month, day);

					var readingsList = new List<Reading>();
					for (var i = 0; i < element.ChaptersPerDay; ++i)
					{
						if (_books == null || bookIndex >= _books.Length) continue;

						var book = _books[bookIndex];
						readingsList.Add(new Reading
						                 	{
						                 		BookName = book.Name,
						                 		Chapter = chapterIndex + 1
						                 	});

						++chapterIndex;
						if (chapterIndex < book.Chapters) continue;

						++bookIndex;
						chapterIndex = 0;
					}

					element.Readings = readingsList.ToArray();
				}
			}

			return _data;
		}
	}
}
