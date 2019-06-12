window.addEventListener("load", function(){

  var queryStringObj= new URLSearchParams(window.location.search);
  console.log(queryStringObj);
  var query= queryStringObj.get("idmovie");
  console.log(query);

    var url= "https://api.themoviedb.org/3/movie/" + query + "?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US"

      fetch(url)
      .then(function(response) { return response.json()
      console.log(response);
      })

      .then(function(information) {
        console.log(information.results);

    var peliculas= information.results
    var urlposter=  "https://image.tmdb.org/t/p/original"
        var titulo= peliculas.title
        var imagen= peliculas.poster_path
        var id= peliculas.id

          document.querySelector(".detalledepelicula").innerHTML+= "<h2>" +  titulo + "</h2>"
          document.querySelector(".detalledepelicula").innerHTML+= "<img src= " + imagen + ">"
          document.querySelector(".detalledepelicula").innerHTML+= "<h3>" +  id + "</h3>"

      })

      .catch(function(error) { console.log("Error: " + error);
      })






















})
