// API KEY 1e49390e6d0f493396d7878c19636a7e

// var title = document.querySelector('title');
// var author = document.querySelector('.author');
// var description = document.querySelector('.description');

// var url = 'https://newsapi.org/v2/everything?' +
//   'q=North+Carolina&' +
//   'from=2021-08-10&' +
//   'sortBy=popularity&' +
//   'apiKey=1e49390e6d0f493396d7878c19636a7e';

// var req = new Request(url);

// fetch(req)
//   .then(function (response) {
//     console.log(response.json());
//   })

var settings = {
  "async": true,
  "crossDomain": true,
  "url": 'https://newsapi.org/v2/everything?' +
    'q=North+Carolina&' +
    'from=2021-08-10&' +
    'sortBy=popularity&' +
    'apiKey=1e49390e6d0f493396d7878c19636a7e',
  "method": "GET"
}

var holder = document.getElementById("holder");

$.ajax(settings).done(function (response) {
  console.log(response);

  var headline = response.articles[0].title;
  $("#title").append(headline);
  var author = response.articles[0].author;
  $("#author").append(author);
  var description = response.articles[0].description;
  $("#description").append(description);
  var url = response.articles[0].url;
  $("#URL").append(url);

  var headline = response.articles[1].title;
  $("#title2").append(headline);
  var author = response.articles[1].author;
  $("#author2").append(author);
  var description = response.articles[1].description;
  $("#description2").append(description);
  var url = response.articles[1].url;
  $("#URL2").append(url);
  
  var headline = response.articles[2].title;
  $("#title3").append(headline);
  var author = response.articles[2].author;
  $("#author3").append(author);
  var description = response.articles[2].description;
  $("#description3").append(description);
  var url = response.articles[2].url;
  $("#URL3").append(url);

  var headline = response.articles[3].title;
  $("#title4").append(headline);
  var author = response.articles[3].author;
  $("#author4").append(author);
  var description = response.articles[3].description;
  $("#description4").append(description);
  var url = response.articles[3].url;
  $("#URL4").append(url);

  var headline = response.articles[5].title;
  $("#title5").append(headline);
  var author = response.articles[5].author;
  $("#author5").append(author);
  var description = response.articles[5].description;
  $("#description5").append(description);
  var url = response.articles[5].url;
  $("#URL5").append(url);
});

// var holder = document.getElementById("holder");

// for (let i = 0; i < 10; i++) {
//   holder.innerHTML = "<p>" + response.articles[i].title + "</p><br/>" 

// }