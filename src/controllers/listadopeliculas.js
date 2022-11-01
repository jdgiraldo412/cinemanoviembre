let peliculas=[
    {nombre:"La jauria",
    duracion:120,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuandavid.appspot.com/o/LA%20JAURIA.jpg?alt=media&token=cd9957e8-b9a1-4c36-9831-b8b678b506b6"
},
    {nombre:"black",
    duracion:90,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuandavid.appspot.com/o/black.jpg?alt=media&token=734833e6-b1d2-4d36-bcde-3cfeaa5eb052"
},
    {nombre:"vista por ultima vez",
    duracion:85,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuandavid.appspot.com/o/peli1.jpg?alt=media&token=7dc1f3ce-8704-4310-ad82-69bc8debbd25"
},
    {nombre:"tormenta",
    duracion:104,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuandavid.appspot.com/o/peli10.jpg?alt=media&token=b7cd70ff-c9e4-4565-9ad0-1e0dacbd1dc4"

},
{nombre:"el fantasma de la niñera",
duracion:95,
poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuandavid.appspot.com/o/peli11.png?alt=media&token=459bc433-0784-42a7-9253-49b97664f986"


},
{nombre:"el fantasma de la niñera",
duracion:95,
poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuandavid.appspot.com/o/peli11.png?alt=media&token=459bc433-0784-42a7-9253-49b97664f986"


},
{nombre:"el fantasma de la niñera",
duracion:95,
poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuandavid.appspot.com/o/peli11.png?alt=media&token=459bc433-0784-42a7-9253-49b97664f986"


},

{nombre:"el fantasma de la niñera",
duracion:95,
poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuandavid.appspot.com/o/peli11.png?alt=media&token=459bc433-0784-42a7-9253-49b97664f986"


},

{nombre:"el fantasma de la niñera",
duracion:95,
poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuandavid.appspot.com/o/peli11.png?alt=media&token=459bc433-0784-42a7-9253-49b97664f986"


}


]

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)
})