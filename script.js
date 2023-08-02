// Acá el juego selecciona un número al azar para que adivines
let numAzar = Math.floor(Math.random()*100) + 1;    // el +1 es para que haya más probabilidades de que salga un 1 o 100

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento')
let intentos = 0

// Esta acción se va a ejecutar cuando se toque el botón chequear
function checkearResultado(){
    intentos++
    intento.textContent = intentos

    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){    // isNaN() SE USA PARA SABER SI EL NUMERO ES UN NUMERO Y NO OTRA COSA
        mensaje.textContent = 'Por favor ingrese un nº válido entre el 1 y el 100';
        mensaje.style.color = 'black';
        return;        
    }

    if (numeroIngresado === numAzar){
        mensaje.textContent = '¡Felicitaciones! ¡Haz adivinado el número!';
        mensaje.style.color = 'green';
        numeroEntrada.disable = true;
    }else if (numeroIngresado < numAzar){
        mensaje.textContent = '¡Más alto! el nº es mayor al que ingresaste';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = '¡Más abajo! el nº es menor al que ingresaste';
        mensaje.style.color = 'red';
    }
};