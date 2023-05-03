import _ from 'underscore';

/**
 * Esta funcion un nuevo deck
 * @param {Array<String>} tiposDeCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspaciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna el nuevo deck
 */
export const crearDeck = (tiposDeCartas, tiposEspaciales) => {

    if(!tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('tiposDeCarta es obligatorio, como un arreglo de String.');
    if(!tiposEspaciales || tiposEspaciales.length === 0) 
        throw new Error('tiposEspaciales es obligatorio, como un arreglo de String.');

    let deck = [];
    for(let i = 2; i<=10; i++){
        for(let tipo of tiposDeCartas){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tiposDeCartas){
        for(let especial of tiposEspaciales){
            deck.push(especial + tipo);
        }
    }
    return _.shuffle(deck);
}

// export default crearDeck; // Importacion Individual, por default