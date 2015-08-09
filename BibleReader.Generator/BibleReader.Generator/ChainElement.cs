namespace BibleReader.Generator
{
	public class ChainElement
	{
		public Reading[] Readings { get; set; }
		public int ChaptersPerDay { get; set; }

		public ChainElement()
		{
			ChaptersPerDay = 1;
		}
	}
}
