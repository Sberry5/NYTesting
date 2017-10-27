    // //Global variables for news and twitter
    // var nyTimes;
    // var twitter;
    // var latLocation;
    // var longLocation;

    //   //Function to generate initial buttons from emotions array
    //   function news() {
    //     //Deleting the emotions prior to adding new emotions
    //     $("#news-view").empty();
    //     //Loop to go through the values in the emotions array
    //     for (var i = 0; i <                                                ; i++) {
    //       //Then dynamically create a <button> element for each
    //       var a = $("<div>");
    //       //Adding a class of emotion to the button
    //       a.addClass("newsClass");
    //       //Adding a data-attribute
    //       a.attr("data-news",                                        [i]);
    //       //Providing the initial button text
    //       a.text(emotions[i]);
    //       //Add the button to the HTML
    //       $("#news-view").append(a);
    //     }
    //   };

    //   //Call to create buttons
    //   news();


/*---------AJAX call to access NYTimes API and return article URLs----------*/
var apiKey = "097ee9426aa547eebab73b606dba9719";
var latitude = 41.766703;
var longitute = -87.648926;
var limit = 10;
//var date_range = 

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + apiKey + "&q=";
    // 'api': "", 
    // //parameters for latitude
    'latitude': "41.766703",
    // //parameters for longitude
    'longitude': "-87.648926",
    // //parameter for date, use moment to specify last month with moment.js?
    // //'date_range': 
    // //
    // 'limit':"10",

    //AJAX call to request gifs from API
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function() { 
    //After data comes back console.log to see what return is
    //recieved from the API
    var newsResults = response.data;
          console.log("URL:" + queryURL);

    var results = response.data;
//          console.log(response);
    //Once data is returned store the results in a variable
//    var results = response.data;

});