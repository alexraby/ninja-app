  var api_key = '821a76f030c19cf10545a94eb1642c35';

// Click the button and Grab the value from the input
$('document').ready(function(e){
  $("#movsearch").click(function(e){
    var q = document.getElementById("moviesearch").value;
    var lowerQ = q.toLowerCase();
    var settings = {
      "async": true,
      "crossDomain": true,
      url: 'http://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + q + '',
      "method": "GET",
      "headers": {},
      "data": "{}",
      dataType: 'jsonp',
      jsonpCallback: 'testing'
    };
// First Call
    $.ajax(settings).done(function(response) {
      var i = 0;
      var objectArray = response;
      for ( i; i < 10; i++) {
        var whoa = objectArray.results[i].id;
        $('#movie_search_results').append('<li id="'+ [i] +'" class="list">' + response.results[i].title + '</li>');
    };
// On Button Click, Get ID
    $('li').bind('click', function (e) {
      var chosen = event.target.id;
      var kevin = objectArray.results[chosen].id;
      var imdb = {
          url: 'https://api.themoviedb.org/3/movie/' + kevin + '?api_key=' + api_key + '',
          "async": true,
          "crossDomain": true,
          "method": "GET",
          "headers": {},
          "data": "{}"
        };
        $.ajax(imdb).done(function(response) {
            var boom = response.imdb_id;
            window.open("https://pro.imdb.com/title/" + boom + "/?ref_=search_search_result_1");
        });
        });

      });
    });
// If User Hits Enter Key
    $('#moviesearch').keypress(function(e){
           if(e.which == 13){//Enter key pressed
             $('#movsearch').click();//Trigger search button click event
           }
       });

});
