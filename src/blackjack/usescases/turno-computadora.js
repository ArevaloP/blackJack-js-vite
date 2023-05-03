import {pedirCarta, acomularPuntos, crearCarta, determinarGanador} from './'

/**
 * 
 * @param {Number} puntosMinimos - Puntos minimos que la computadora necesita para ganar 
 * @param {Array<Number>} puntosJugadores - Array que almacena los puntos de todos los jugadores 
 * @param {Array<HTMLElement>} puntosHTML - Array que almacena elementos html donde se muestran los puntos de los jugadores 
 * @param {Array<HTMLElement>} divCartasJugadores - Array que almacena elementos html de contenedorsdonde se muestran las cartas de los jugadores 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosJugadores, puntosHTML, divCartasJugadores, deck = [] ) => {
    if(!puntosMinimos) throw new Error('puntosMinimos necesarios.');
    if(!deck) throw new Error('deck neceasario.');
    
    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(deck);
        puntosComputadora = acomularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
    }while( (puntosMinimos > puntosComputadora) && (puntosMinimos <= 21) );
    determinarGanador(puntosJugadores);
}