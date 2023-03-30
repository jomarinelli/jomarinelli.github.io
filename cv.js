/** Para esta primera parte tuve que repetir muchísimo código, porque no tengo los conocimientos suficientes en JS! Espero algun dia tenerlos.
 * Lo que hice fue declarar una var para cada uno de los links de la barra de navegacion, y luego definir una funcion para cada caso al hacer click.
 * Entocnes, por ejemplo, al hacer click en "estudios", se activa la función "estudios" que define si los divs estan block o none y actúa en consecuencia
 * Tuve que usar la logica "and" porque al principio no lograba que al clickear en cada seccion solo me mostrara esa seccion. En cambio, antes me alternaba siempre entre
 * todo el contenido y la sección elegida. Con el "&&" logré dos reglas para definir si lo que se estaba mostrando era un fragmento o todo el contenido
 * Investigué un poco como mostrar u ocultar los divs según el caso, y la lógica if/else que habíamos visto y tambien conocía. 

 */
var datos_personales = document.getElementById('datos_personales');
var estudios = document.getElementById('estudios');
var experiencia_laboral = document.getElementById('experiencia_laboral');
var informacion_importante = document.getElementById('informacion_importante');
var por_que_contratarme = document.getElementById('por_que_contratarme');

function Datos_personales(){
    if (datos_personales.style.display == 'block' && estudios.style.display =='none') {
        estudios.style.display ='block'
        datos_personales.style.display = 'block';
        experiencia_laboral.style.display = 'block';
        informacion_importante.style.display = 'block';
        por_que_contratarme.style.display = 'block';
    } else {
        datos_personales.style.display = 'block';
        estudios.style.display = 'none';
        experiencia_laboral.style.display = 'none';
        informacion_importante.style.display = 'none';
        por_que_contratarme.style.display = 'none';
    }
}

function Estudios(){
    if (estudios.style.display == 'block' && experiencia_laboral.style.display =='none') {
        estudios.style.display ='block'
        datos_personales.style.display = 'block';
        experiencia_laboral.style.display = 'block';
        informacion_importante.style.display = 'block';
        por_que_contratarme.style.display = 'block';
    } else {
        datos_personales.style.display = 'none';
        estudios.style.display = 'block';
        experiencia_laboral.style.display = 'none';
        informacion_importante.style.display = 'none';
        por_que_contratarme.style.display = 'none';
    }
}

function Experiencia_laboral(){
    if (experiencia_laboral.style.display == 'block' && informacion_importante.style.display =='none') {
        estudios.style.display ='block'
        datos_personales.style.display = 'block';
        experiencia_laboral.style.display = 'block';
        informacion_importante.style.display = 'block';
        por_que_contratarme.style.display = 'block';
    } else {
        datos_personales.style.display = 'none';
        estudios.style.display = 'none';
        experiencia_laboral.style.display = 'block';
        informacion_importante.style.display = 'none';
        por_que_contratarme.style.display = 'none';
    }
}

function Informacion_importante(){
    if (informacion_importante.style.display == 'block' && por_que_contratarme.style.display =='none') {
        estudios.style.display ='block'
        datos_personales.style.display = 'block';
        experiencia_laboral.style.display = 'block';
        informacion_importante.style.display = 'block';
        por_que_contratarme.style.display = 'block';
    } else {
        datos_personales.style.display = 'none';
        estudios.style.display = 'none';
        experiencia_laboral.style.display = 'none';
        informacion_importante.style.display = 'block';
        por_que_contratarme.style.display = 'none';
    }
}

function Por_que_contratarme(){
    if (por_que_contratarme.style.display == 'block' && datos_personales.style.display =='none') {
        estudios.style.display ='block'
        datos_personales.style.display = 'block';
        experiencia_laboral.style.display = 'block';
        informacion_importante.style.display = 'block';
        por_que_contratarme.style.display = 'block';
    } else {
        datos_personales.style.display = 'none';
        estudios.style.display = 'none';
        experiencia_laboral.style.display = 'none';
        informacion_importante.style.display = 'none';
        por_que_contratarme.style.display = 'block';
    }
}

function Volver(){
    datos_personales.style.display = 'block';
    estudios.style.display = 'block';
    experiencia_laboral.style.display = 'block';
    informacion_importante.style.display = 'block';
    por_que_contratarme.style.display = 'block';

}

/**Codigo para fijar la barra de navegación al hacer scroll.La informacion para crear esta parte la saque de w3schools */

window.onscroll = function() {miFuncion()};

var barra_de_navegacion = document.getElementById("barra_de_navegacion");

var fijar = barra_de_navegacion.offsetTop;

function miFuncion() {
  if (window.pageYOffset > fijar) {
    barra_de_navegacion.classList.add("fijar");
  } else {
    barra_de_navegacion.classList.remove("fijar");
  }
}