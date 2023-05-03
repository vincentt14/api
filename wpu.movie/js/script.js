function searchMovie(){
  $('#movieList').html('');
  $.ajax({
    url: 'http://www.omdbapi.com/',
    type: 'get',
    dataType: 'json',
    data: {
      'apikey': '8461178d',
      's' : $('#searchInput').val()
    },
    success: function(result){
      if(result.Response == "True"){
        let movies = result.Search
        $.each(movies, function(i, data){
          $('#movieList').append(`
          <div class="col-md-4">
            <div class="card mb-3">
              <img src="${data.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${data.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
                <a href="#" id="seeDetail" class="card-link" data-toggle="modal" data-target="#exampleModal" data-id="${data.imdbID}">See Detail</a>
              </div>
            </div>
          </div>
          `);
        });
  
        $('#searchInput').val('')
      }else {
        $('#movieList').html(`
        <div class="col">
          <h1 class="text-center">${result.Error}</h1>
        </div>
        `)
      }
    }
  });
}

$('#searchButton').on('click', function(){
  searchMovie();
});

$('#searchInput').on('keyup', function(e){
  if(e.which === 13){
    searchMovie();
  }
});

$('#movieList').on('click', '#seeDetail' ,function(){
  $.ajax({
    url: 'http://www.omdbapi.com/',
    type: 'get',
    dataType: 'json',
    data: {
      'apikey': '8461178d',
      'i': $(this).data('id')
    },
    success: function(movie){
      if(movie.Response === 'True'){
        $('.modal-body').html(`
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="${movie.Poster}" class="img-fluid"/>
              </div>
              <div class="col-md-8">
                <ul class="list-group">
                  <li class="list-group-item"><h3>${movie.Title}</h3></li>
                  <li class="list-group-item">Released: ${movie.Released}</li>
                  <li class="list-group-item">Genre: ${movie.Genre}</li>
                  <li class="list-group-item">Actors: ${movie.Actors}</li>
                  <li class="list-group-item">Director: ${movie.Director}</li>
                </ul>
            </div>
          </div>
        `)
      }
    }
  });
});