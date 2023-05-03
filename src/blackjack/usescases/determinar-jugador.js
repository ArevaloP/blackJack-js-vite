
/**
 * Determina el jugador ganador
 * @param {Array<Number>} puntosJugadores Puntos de los jugadores hasta el momento 
 */
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ){
            alert('Nadie Gana :(');
        }else if(puntosMinimos > 21){
            alert('Computadora Gana');
        }else if(puntosComputadora > 21){
            alert ('Jugador Gana');
        } else{
            alert('Computadora Gana');
        }
    }, 100);
}