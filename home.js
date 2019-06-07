window.onload= function(){

var url = "https://image.tmdb.org/t/p/original"

  fetch("https://api.themoviedb.org/3/movie/popular?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US&page=1")
  .then(function(response) { return response.json()
  console.log(response);
  })

  .then(function(information) {

var arrayDePeliculas= information.results

console.log(information.results);

  for (var i = 0; i < arrayDePeliculas.length; i++) {
    var titulo= arrayDePeliculas[i].title
    var imagen= arrayDePeliculas[i].poster_path
    var id= arrayDePeliculas[i].id
elementoHTML = "<div class='uk-overlay uk-overlay-primary uk-position-bottom uk-text-center'>"
elementoHTML +=   "<p class='uk-margin-remove'>"+titulo+"</p>"
elementoHTML += "</div>"
document.querySelector(".fotospopu").innerHTML+= "<li> <a href= detalle.html?idGif="+ id + "> <img src= " + url + imagen + ">"  +elementoHTML + "</a></li>"

}



  })

  .catch(function(error) { console.log("Error: " + error);
  })}



    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US&page=1")
    .then(function(response) { return response.json()
    console.log(response);
    })


    .then(function(information) {

  var arrayDePeliculas= information.results

  console.log(information.results);

    for (var i = 0; i < arrayDePeliculas.length; i++) {
      var titulo= arrayDePeliculas[i].original_title
      var imagen= arrayDePeliculas[i].poster_path
      var id= arrayDePeliculas[i].id
        var url = "https://image.tmdb.org/t/p/original"
        elementoHTML = "<div class='uk-overlay uk-overlay-primary uk-position-bottom uk-text-center'>"
        elementoHTML +=   "<p class='uk-margin-remove'>"+titulo+"</p>"
        elementoHTML += "</div>"
        document.querySelector(".fotospunt").innerHTML+= "<li> <a href= detalle.html?idGif="+ id + "> <img src= " + url + imagen + ">"  +elementoHTML + "</a></li>"
  }



    })

    .catch(function(error) { console.log("Error: " + error);
    })

    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US&page=1")
    .then(function(response) { return response.json()
    console.log(response);
    })


    .then(function(information) {

  var arrayDePeliculas= information.results

  console.log(information.results);

    for (var i = 0; i < arrayDePeliculas.length; i++) {
      var titulo= arrayDePeliculas[i].original_title
      var imagen= arrayDePeliculas[i].backdrop_path
      var id= arrayDePeliculas[i].id
      var url = "https://image.tmdb.org/t/p/original"
        elementoHTML = "<div class='uk-overlay uk-overlay-primary uk-position-bottom uk-text-center'>"
        elementoHTML +=   "<p class='uk-margin-remove'>"+titulo+"</p>"
        elementoHTML += "</div>"
        document.querySelector(".fotosprox").innerHTML+= "<li> <a href= detalle.html?idGif="+ id + "> <img src= " + url + imagen + ">"  +elementoHTML + "</a></li>"
  }



    })

    .catch(function(error) { console.log("Error: " + error);
    })
