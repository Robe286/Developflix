import peliculas from './peliculas.js'

//Trabajo en el DOM

// - Capturar los div de cada género:

const Accion = document.getElementById('genero-28');
const Thriller = document.getElementById('genero-53');
const Aventura = document.getElementById('genero-12');

//Funcion mostrar peliculas, dentro foreach, el for each por cada pelicula crearia un elemento(div) en el que se mostrase cada pelicula
//ahi utilizar un appendchild a cada elemento con la imagen y el titulo
// cuando haga la funcion pongo dos parametros uno el de las generopeliculas y otro el div del contenedor html, y luego
//cuando invoquemos el genero y el div se crearan.

//Crear nodos para título película y imagen:

//Crear nodos img y h3
/*const Imagen = document.createElement('img');
const titulo = document.createElement('h3');*/

//Agregar los elementos creados a los section:
/*Accion.appendChild(Imagen);
Thriller.appendChild(Imagen);
Aventura.appendChild(Imagen);
                                
console.log(Accion);
console.log(Thriller);
console.log(Aventura); //Solo me aparece en aventura

//variables array para cada genero:*/

const pelisAccion = peliculas.filter((pelicula) => pelicula.genre_ids.includes(28));
const pelisThriller = peliculas.filter((pelicula) => pelicula.genre_ids.includes(53));
const pelisAventura = peliculas.filter((pelicula) => pelicula.genre_ids.includes(12));

/*pelisAccion.map((elemento) => {
    elemento = (Accion.innerHTML += `<li><img src="https://image.tmdb.org/t/p/w200/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg" ></li>`);
});*/

function agregarPeliculas(pelisAccion, Accion) {
    pelisAccion.map((elemento) => {
        elemento = (Accion.innerHTML += `<div><img src="https://image.tmdb.org/t/p/w500${elemento.poster_path} alt=${elemento.title}" ></div> <h3>${elemento.title}</h3>`);
    });

}
agregarPeliculas(pelisAccion, Accion);
agregarPeliculas(pelisThriller, Thriller);
agregarPeliculas(pelisAventura, Aventura);

//metiendo el foreach en una funcion, cada funcion le pasamos el genero id, al invocar en el parametro pone 28, 53 y 12

/*const agregarPeliculas = (pelisAccion, Accion) => {
    return pelisAccion.forEach(Accion.innerHTML += (`<li><img src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" ><h3>${peliculas.title}</h3></li>`))
} 

agregarPeliculas(pelisAccion, Accion)*/

/*accion.forEach(pelicula=>{
    const li = document.createElement('li');
    li.innerText=pelicula.title;
    pelisAccion.appendChild(li);
});*/

/*function agregarPeliculas (pelisAccion, Accion) {
    pelisAccion.forEach((elemento) => Accion.innerHTML =`<img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${peli.title}"><h3>${peli.title}</h3>`);
};
agregarPeliculas(pelisAccion, Accion);*/

    /*Accion.forEach(pelicula => {
    const li =document.createElement('li');
    li.innerText=pelicula.title;
    pelisAccion.appendChild(li)*/
