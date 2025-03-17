import peliculas from './peliculas.js'

//Trabajo en el DOM

// - Capturar los div de cada género:

const generoAccion = document.getElementById('genero-28');
const generoThriller = document.getElementById('genero-53');
const generoAventura = document.getElementById('genero-12');


//Crear nodos para título película y imagen:

//Crear nodos img y h3
const elementImagen = document.createElement('img');
const tituloPelicula = document.createElement('h3');
console.log(tituloPelicula);

//Agregar los elemento creados a los section:
generoAccion.appendChild(elementImagen);
generoThriller.appendChild(elementImagen);

console.log(generoAccion);


//const Accion = peliculas.filter((pelicula) => pelicula.genre_ids.includes(28));