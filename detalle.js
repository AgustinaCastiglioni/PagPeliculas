window.addEventListener("load", function(){

  // Obtengo la info de local storage
  var json = localStorage.getItem("pelisFavoritas")

  // Si ya habia favoritos..
  if (json != null) {
    // Desempaquetar el string JSON
    var objLit = JSON.parse(json)

    // De todo el objeto literal me interesa EL ARRAY
    var favoritos = objLit.peliculas

  } else {
    // Si no habia creo el listado como VACIO
    var favoritos = []
  }

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

       var h2=" "
       for (var i = 0; i < generos.length; i++) {
         h2+= '<a href="generos.html?idgenero=' + generos[i].id +  '&nombregenero='+ generos[i].name +'">'+ generos[i].name + ", " +'</a>'
       }

          document.querySelector(".infodepelicula").innerHTML+= "<h1>" +  titulo + "</h1>"
          document.querySelector(".infodepelicula").innerHTML+= "<h3> Idioma: " +  lenguaje + "</h3>"
          document.querySelector(".infodepelicula").innerHTML+= "<h3> Género/os: " +  h2 + "</h3>"
          document.querySelector(".uk-accordion-content").innerHTML+= "<p>" + sinopsis + "</p>"
          document.querySelector(".infodepelicula").innerHTML+= "<h3> Fecha de estreno: " +  fechaestreno + "</h3>"
          document.querySelector(".detalledepelicula").innerHTML+= "<div class=fotodetalle style='position:relative'><a class='estrellita' style='position:absolute' href='' uk-icon='icon:star;ratio:3'></a><img class=fotito src= " + urlposter + imagen + "></div>"

          if (favoritos.indexOf(idMovie) != -1) {
            document.querySelector(".estrellita").style.color = "gold"
          }

          document.querySelector(".estrellita").onclick = function(e) {
            e.preventDefault()
            if (favoritos.indexOf(idMovie) == -1) {
              // Lo agrega
              favoritos.push(idMovie)
              // Actualiza el boton
              this.style.color = "gold"
            } else {
              // Lo quita
              var posicion = favoritos.indexOf(idMovie)
              favoritos.splice(posicion,1)
              // Actualiza el boton
              this.style.color = "gray"
            }

            //Vuelvo a crear el objeto
            obj = {
              peliculas: favoritos
            }

            // LO transformo en JSON
            json = JSON.stringify(obj)

            // Lo guardo en Local Storage
            localStorage.setItem("pelisFavoritas", json)
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
