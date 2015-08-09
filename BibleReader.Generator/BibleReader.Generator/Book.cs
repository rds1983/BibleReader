using System;
using System.Collections.Generic;

namespace BibleReader.Generator
{
	public class Book
	{
		private readonly string _name;
		private readonly int _chapters;

		public string Name
		{
			get { return _name; }
		}

		public int Chapters
		{
			get { return _chapters; }
		}

		public Book(string name, int chapters)
		{
			_name = name;
			_chapters = chapters;
		}
	}
}
