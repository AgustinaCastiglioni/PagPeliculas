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
       var generos= peliculas.genres

       var h2=""
       for (var i = 0; i < generos.length; i++) {
         h2+= '<a href="generos.html?idgenero=' + generos[i].id +  '&nombregenero='+ generos[i].name +'">'+ generos[i].name +'</a>' 
       }

          document.querySelector(".infodepelicula").innerHTML+= "<h2>" +  titulo + "</h2>"
          document.querySelector(".infodepelicula").innerHTML+= "<h3>" +  lenguaje + "</h3>"
          document.querySelector(".infodepelicula").innerHTML+= "<h3>" +  h2 + "</h3>"
          document.querySelector(".uk-accordion-content").innerHTML+= "<p>" + sinopsis + "</p>"
          document.querySelector(".infodepelicula").innerHTML+= "<h3>" +  fechaestreno + "</h3>"
          document.querySelector(".detalledepelicula").innerHTML+= "<img class=fotito src= " + urlposter + imagen + ">"


      })

      .catch(function(error) { console.log("Error: " + error);
      })


      fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US")
      .then(function(response) { return response.json()
      console.log(response);
      })

      .then(function(information) {

    var arrayDeGeneros= information.genres

    for (var i = 0; i < arrayDeGeneros.length; i++) {
    var nombres = arrayDeGeneros[i].name
    var id = arrayDeGeneros[i].id
    document.querySelector(".generos-drop").innerHTML += "<a href='generos.html?idgenero=" + id + "&nombregenero="+nombres+ "'>" + nombres + "</a>"

    }

    console.log(information.genres);
    })

      .catch(function(error) { console.log("Error: " + error);
      })























})
