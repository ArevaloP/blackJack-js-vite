import { valorCarta } from './';

/**
 * Cambia los putnos en el HTML
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<Number>} puntosJugadores 
 * @param {Array<HTMLElement>} puntosHTML 
 * @returns {Number} Valor a cambiar en el html
 */
export const acomularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}