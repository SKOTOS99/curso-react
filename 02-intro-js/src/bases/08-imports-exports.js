import heroes, {owners} from "../data/heroes";

/**
 * Cuando la importacion es por default no se colocan llaves {}
 * unicamente se coloca el nombre con el que se va a importar.
 * si es una importacion individual se colocan las llaves {owners}
 * @param id
 * @returns {{owner: string, name: string, id: number} | {owner: string, name: string, id: number} | {owner: string, name: string, id: number} | {owner: string, name: string, id: number} | {owner: string, name: string, id: number}}
 */

const getHeroeById = (id) =>{
    return heroes.find(value => value.id === id );
};

console.log(getHeroeById(1));

const getHeroeByOwner = (own) =>{
    return heroes.filter(value => value.owner === own );
};

console.log(getHeroeByOwner('DC'));

console.log(owners);