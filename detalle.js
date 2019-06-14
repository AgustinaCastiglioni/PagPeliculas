window.addEventListener("load", function(){
  if (localStorage.getItem("nombre") == null) {
      console.log(1);
document.querySelector(".peliculaspreferidas").style.display= "none"
  }
  else {
    document.querySelector(".login").innerHTML = "Hola " + localStorage.getItem("nombre")
    document.querySelector(".peliculaspreferidas").style.display= "block"
  }


  // var url= "https://api.themoviedb.org/3/movie/" + idMovie + "?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US"

  var queryString = location.search
  queryString = new URLSearchParams(queryString)
  var idMovie = queryString.get("idmovie")


      fetch("https://api.themoviedb.org/3/movie/" + idMovie + "?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US")
      .then(function(response) { return response.json()
      console.log(response);
      })

      .then(function(information) {
        console.log(information);

 var url = "https://image.tmdb.org/t/p/original"
    var peliculas= information
    var urlposter= "https://image.tmdb.org/t/p/original"
        var titulo= peliculas.original_title
        var imagen= peliculas.poster_path
        var lenguaje= peliculas.original_language
        var sinopsis= peliculas.overview
       var fechaestreno= peliculas.release_date
       // var video=
       // var generos=


          document.querySelector(".infodepelicula").innerHTML+= "<h2>" +  titulo + "</h2>"
          document.querySelector(".infodepelicula").innerHTML+= "<h3>" +  lenguaje + "</h3>"
          document.querySelector(".uk-accordion-content").innerHTML+= "<p>" + sinopsis + "</p>"
          document.querySelector(".infodepelicula").innerHTML+= "<h3>" +  fechaestreno + "</h3>"
          document.querySelector(".detalledepelicula").innerHTML+= "<img src= " + urlposter + imagen + ">"


      })

      .catch(function(error) { console.log("Error: " + error);
      })


























})
