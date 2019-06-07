window.onload = function(){

  var queryString = location.search

  queryString = new URLSearchParams(queryString)


  var idGenero = queryString.get("idgenero")


  fetch("https://api.themoviedb.org/3/discover/movie?api_key=063b16f0b4b52316bdf354da4c0177d7&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=" + idGenero)
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
          elementoHTML = "<div class='uk-position-center uk-panel'>"
          elementoHTML += "</div>"
          document.querySelector(".generardo").innerHTML+= "<li>  <img src= " + url + imagen + ">"  + elementoHTML + "</li>"
    }


  })

  .catch(function(error) { console.log("Error: " + error);
  })


  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US")
  .then(function(response) { return response.json()
  console.log(response);
  })

  .then(function(information) {

var arrayDeGeneros= information.genres

console.log(information.genres);

for (var i = 0; i < arrayDeGeneros.length; i++) {
var nombres = arrayDeGeneros[i].name
var id = arrayDeGeneros[i].id


 document.querySelector(".generos-drop").innerHTML += "<a href='generos.html?idgenero=" + id + "'>" + nombres + "</a>"

}



  })

  .catch(function(error) { console.log("Error: " + error);
  })



}
new WarpSpeed ('myCanvas')
