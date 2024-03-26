function generate(){
  var quotes = {
    "― Albert Einstein" :`“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”`,

    "- C.S Lewis" : '"I was not born to be free---I was to adore and obey."',

    "-Jenny Valentine" : '"Even when you had lost everything you thought there was to lose, someone came along and gave you something for free."'
  }

  var authors = Object.keys(quotes);
  // console.log(authors);

  var author = authors[Math.floor(Math.random() *authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
  
  console.log("Hello");

}