  function buildLink(name, chapter, lang)
  {
    return "<a href=\"http://azbyka.ru/biblia/?" + name + "."+chapter+
      "&" + lang + "\">http://azbyka.ru/biblia/?" + name + "." + chapter + "&" + lang + "</a><br/>";
  }
  
  function generateLinks(element, selectedDate, lang)
  {
    element.text("");
    
    for (var i = 0; i < reading.length; ++i) {
      var r = reading[i];

      var parts = r.date.split('/');
      var day = parseInt(parts[0]);
      var month = parseInt(parts[1]);	  
      if (day != selectedDate.getDate() || month - 1 != selectedDate.getMonth()) {
		    // Wrong date
		    continue;
      }
      
      books = r.books.split(',');
	    for (var j = 0; j < books.length; ++j) {
        var book = books[j];

        parts = book.split(':');
        var bookName = parts[0];
        var chapter = parts[1];
        element.append(buildLink(bookName, chapter, lang));
  	  }
    }   
  }