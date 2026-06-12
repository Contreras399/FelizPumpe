// --- Lógica del script.js ---

// Variables para controlar los elementos de la página
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');
const imagen = document.getElementById('imagen-dinamica');
const titulo = document.getElementById('titulo-dinamico');
const texto = document.getElementById('texto-dinamico');
const contador = document.getElementById('contador');

// --- Definición de los 16 pasos de tu secuencia ---
// NOTA: Asegúrate de tener estas imágenes guardadas en tu carpeta 'imagenes'
// (ej: foto1.jpg, foto2.jpg, etc.)
const secuencia = [
    {
        foto: "images/mareni.jpeg", 
        titulo: "Feliz pumpeee", 
        texto: "Hoy es un día muy especial porque cumple sus 18 añitos una personita muy especial para mí, una niña muy bonita a la que amo."
    },
    {
        foto: "images/mareni10.jpeg", 
        titulo: "Un año más", 
        texto: "Este año me hizo apreciarte aún más de lo que ya te quería, cada día a tu lado es más bonito."
    },
    {
        foto: "images/mareni2.jpeg", 
        titulo: "Tu importancia", 
        texto: "A veces se me olvida decir las cosas importantes, pero hoy quiero recordarte que tu presencia le da una chispa única a la vida de todos los que te rodeamos."
    },
    {
        foto: "images/mareni3.jpeg", 
        titulo: "Lento y con amor", 
        texto: "¡No se vale hacer trampa ni ir muy rápido! Disfruta cada foto y cada palabra, porque todo lo que ves aquí lo hice de corazón porque te amo."
    },
    {
        foto: "images/mareni4.jpeg", 
        titulo: "Gracias por ser mi lugar seguro", 
        texto: "Aunque a veces peleamos, nos enojamos y no nos entendemos, saber que cuento contigo es de las cosas más bonitas que tengo."
    },
    {
        foto: "images/mareni6.jpeg", 
        titulo: "Cada momento juntos", 
        texto: "Cada risa, cada secreto y cada momento juntos se ha quedado guardado en mi mente. No cambiaría por nada todos los momentos que he pasado contigo."
    },
    {
        foto: "images/mareni5.jpeg", 
        titulo: "Tu luz es contagiosa", 
        texto: "Tienes una forma de ver la vida que inspira a los demás a ser mejores. Nunca pierdas esa esencia tan tuya que te hace tan especial para mí."
    },
    {
        foto: "images/mareni7.jpeg", 
        titulo: "Mi cómplice favorita", 
        texto: "Gracias por entender mis chistes malos, por seguirme la corriente en cada locura y por estar ahí cuando el día se pone difícil. Eres un pilar en mi vida."
    },
    {
        foto: "images/mareni8.jpeg", 
        titulo: "Lo que siento por ti", 
        texto: "A veces me cuesta encontrar las palabras exactas para demostrarte todo mi amor, pero quiero que sepas que te quiero con todo mi corazón. Tu felicidad siempre va a ser la mía."
    },
    {
        foto: "images/mareni9.jpeg", 
        titulo: "Admiro todo de ti", 
        texto: "Admiro que nunca te rindes, tu forma de intentar resolver los problemas y tu gran manera de querer."
    },
    {
        foto: "images/mareni1.jpeg", 
        titulo: "El mejor regalo de la vida ha sido conocerte.", 
        texto: "Si pudiera volver el tiempo atrás, elegiría estar en la misma prepa una y mil veces más. Cambiaste mi mundo por completo desde que te conocí."
    },
    {
        foto: "images/mareni11.jpeg", 
        titulo: "Deseo que te veas con los ojos que yo te veo", 
        texto: "Si pudieras verte como yo te veo entenderías el porque te amo tanto y el porque eres tan especial paraa mí.."
    },
    {
        foto: "images/mareni12.jpeg", 
        titulo: "Que este nuevo año venga lleno de éxitos", 
        texto: "Sé que tienes metas enormes y no tengo ninguna duda de que vas a cumplir cada una de ellas. Siempre estaré ahí para apoyarte, animarte y sobre todo admirarte."
    },
    {
        foto: "images/mareni16.jpeg", 
        titulo: "Muchoo amooor y paz", 
        texto: "Ya eres mayooor de edad manenis, espero que nunca te falte el amor de tus amigos y familia, recuerda que no debes pelear mucho porque le hace daño al bebé."
    },
    {
        foto: "images/mareni67.jpeg", 
        titulo: "Ya casi llegamos al final de la sorpresa", 
        texto: "Pero esto es solo el inicio de una vida increíble para ti. Sigue sonriendo, sigue brillando y nunca olvides lo mucho que vales y lo mucho que te amo."
    },
    {
        foto: "images/mareni95.jpeg", 
        titulo: "Feliz vida, mi vida.", 
        texto: "Llegamos al último paso. Solo me queda recordarte una vez más cuánto te quiero, cuánto te adoro, cuánto te amo, cuánto te agradezco y desearte el cumpleaños más hermoso de todos."
    }
];

// Índice para rastrear el paso actual (comienza en 0)
let indiceActual = 0;

// --- Función para actualizar el contenido de la página ---
function actualizarContenido() {
    // Obtenemos los datos del paso actual
    const pasoActual = secuencia[indiceActual];

    // Actualizamos la imagen, título y texto
    imagen.src = pasoActual.foto;
    titulo.innerText = pasoActual.titulo;
    texto.innerText = pasoActual.texto;
    
    // Actualizamos el contador (ej: "1 / 16", "2 / 16", ...)
    contador.innerText = `${indiceActual + 1} / ${secuencia.length}`;

    // Deshabilitamos el botón "Anterior" en la primera imagen (índice 0)
    btnAnterior.disabled = (indiceActual === 0);

    // Deshabilitamos el botón "Siguiente" en la última imagen (índice 15)
    btnSiguiente.disabled = (indiceActual === secuencia.length - 1);
}

// --- Manejo de Eventos de los Botones ---

// Al pulsar "Siguiente"
btnSiguiente.addEventListener('click', () => {
    // Solo avanzamos si no estamos en la última imagen
    if (indiceActual < secuencia.length - 1) {
        indiceActual++;
        actualizarContenido();
    }
});

// Al pulsar "Anterior"
btnAnterior.addEventListener('click', () => {
    // Solo retrocedemos si no estamos en la primera imagen
    if (indiceActual > 0) {
        indiceActual--;
        actualizarContenido();
    }
});

// --- Inicialización: cargamos el primer paso al abrir la página ---
actualizarContenido();