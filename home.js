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
document.querySelector(".POPULARES").innerHTML+= "<h2><a href= detalle.html?idGif="+ id + ">" +  titulo + "</a></h2>"
document.querySelector(".photos").innerHTML+= "<li> <img src= " + url + imagen + "> </li>"
}



  })

  .catch(function(error) { console.log("Error: " + error);
  })}
