
/**
 * 
 * @param {String} carta Carta que se desea agrgar al HTML
 * @param {Number} turno Turno del jugador
 * @param {Array<HTMLElement>} divCartasJugadores Arreglo que almacena los contenedores donde se muestran las cartas 
 */
export const crearCarta = ( carta, turno, divCartasJugadores ) => {
    const cartaImg = document.createElement('img');
    cartaImg.src = `assets/cartas/${carta}.png`;
    cartaImg.classList.add('carta');
    divCartasJugadores[turno].append(cartaImg);
}