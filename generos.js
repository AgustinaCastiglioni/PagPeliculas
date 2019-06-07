window.onload = function(){

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US")
  .then(function(response) { return response.json()
  console.log(response);
  })

  .then(function(information) {

var arrayDePeliculas= information.genres

console.log(information.genres);

//   for (var i = 0; i < arrayDePeliculas.length; i++) {
//     var titulo= arrayDePeliculas[i].title
//     var imagen= arrayDePeliculas[i].poster_path
//     var id= arrayDePeliculas[i].id
// elementoHTML = "<div class='uk-overlay uk-overlay-primary uk-position-bottom uk-text-center'>"
// elementoHTML +=   "<p class='uk-margin-remove'>"+titulo+"</p>"
// elementoHTML += "</div>"
// document.querySelector(".fotospopu").innerHTML+= "<li> <a href= detalle.html?idGif="+ id + "> <img src= " + url + imagen + ">"  +elementoHTML + "</a></li>"
//
// }



  })

  .catch(function(error) { console.log("Error: " + error);
  })

  new WarpSpeed ('myCanvas')


  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US")
  .then(function(response) { return response.json()
  console.log(response);
  })

  .then(function(information) {

var arrayDeGeneros= information.genres

console.log(information.genres);

for (var i = 0; i < arrayDeGeneros.length; i++) {
var nombres = arrayDeGeneros[i].name

 document.querySelector(".generos-drop").innerHTML += "<a href= https://www.google.com.ar>" + nombres + "</a>"

}



  })

  .catch(function(error) { console.log("Error: " + error);
  })



}
