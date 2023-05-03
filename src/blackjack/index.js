import _ from 'underscore';
// import { crearDeck as crearNuevoDeck } from './usescases/crear-deck'
import { crearDeck, pedirCarta, turnoComputadora, acomularPuntos, crearCarta } from './usescases'

let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

let contadorJuego = 0;

const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML = document.querySelectorAll('small');


const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }
    puntosHTML.forEach(punto => punto.innerText = 0);
    divCartasJugadores.forEach(div => div.innerHTML = '');
    btnPedir.disabled = false;
    contadorJuego = 0;
}

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acomularPuntos(carta, 0, puntosJugadores, puntosHTML);
    crearCarta(carta, 0, divCartasJugadores);

    if (contadorJuego === 0) {
        btnDetener.disabled = false;
    }

    if (puntosJugador > 21) {
        console.warn('Lo siento, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores, deck);
    } else if (puntosJugador === 21) {
        console.warn('21, Genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores, deck);
    }
    contadorJuego++;
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], puntosJugadores, puntosHTML, divCartasJugadores, deck);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
});




