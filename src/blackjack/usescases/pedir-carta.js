
/**
 * Extrae una cartad el arreglo de deck
 * @param {Array<String>} deck - Arreglo de deck de donde se extrae la carta
 * @returns {String} - retorna la carta extraida
 */
export const pedirCarta = (deck) =>{

    if(!deck || deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}