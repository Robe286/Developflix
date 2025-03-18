import peliculas from './peliculas.js'

//Trabajo en el DOM

// - Capturar los div de cada género:

const Accion = document.getElementById('genero-28');
const Thriller = document.getElementById('genero-53');
const Aventura = document.getElementById('genero-12');

//Crear nodos para título película y imagen:

//Crear nodos img y h3
const Imagen = document.createElement('img');
const titulo = document.createElement('h3');

//Agregar los elemento creados a los section:
Accion.appendChild(Imagen);
Thriller.appendChild(Imagen);
Aventura.appendChild(Imagen);
                                
console.log(Accion);
console.log(Thriller);
console.log(Aventura); //Solo me aparece en aventura
//variables array para cada genero:

const pelisAccion = peliculas.filter((pelicula) => pelicula.genre_ids.includes(28));
const pelisThriller = peliculas.filter((pelicula) => pelicula.genre_ids.includes(53));
const pelisAventura = peliculas.filter((pelicula) => pelicula.genre_ids.includes(12));

//metiendo el filter en una funcion, cada duncion le pasamos el genero id, al invocar en el parametro pone 28, 53 y 12


