var api_key2 = '821a76f030c19cf10545a94eb1642c35';


// Click the button and Grab the value from the input
$('document').ready(function(e){
  $("#tvsearch").click(function(e){
    var m = document.getElementById("tv-search").value;
    // var lowerQ = q.toLowerCase();
    var settings = {
      "async": true,
      "crossDomain": true,
      url: 'https://api.themoviedb.org/3/search/tv?api_key=' + api_key2 + '&query=' + m + '',
      "method": "GET",
      "headers": {},
      "data": "{}",
      dataType: 'jsonp',
      jsonpCallback: 'testing'
    };

    console.log(m);
// First Call
    $.ajax(settings).done(function(response) {
      console.log(response);
      var i = 0;
      var objectArray = response;
      for ( i; i < 10; i++) {
        var whoa = objectArray.results[i].id;
        $('#tv_search_results').append('<li id="'+ [i] +'" class="list">' + response.results[i].original_name + '</li>');
    };
// On Button Click, Get ID
    $('li').bind('click', function (e) {
      var chosen = event.target.id;
      var kevin = objectArray.results[chosen].id;
      var imdb = {
          url: 'https://api.themoviedb.org/3/tv/' + kevin + '/external_ids?api_key=' + api_key + '',
          "async": true,
          "crossDomain": true,
          "method": "GET",
          "headers": {},
          "data": "{}"
        };
        $.ajax(imdb).done(function(response) {
          console.log(response);
            var boom = response.imdb_id;
            window.open("https://pro.imdb.com/title/" + boom + "/?ref_=search_search_result_1");
        });
        });

      });
    });
// If User Hits Enter Key
    $('#tv-search').keypress(function(e){
           if(e.which == 13){//Enter key pressed
             $('#tvsearch').click();//Trigger search button click event
           }
       });

});
