

const arreglo = ['goku', 'vegueta', 'trunks' ];

/**
 * La desestructuracion de arrelgos funciona dando un nombre a cada posicion del arreglo
 * es decir si el arreglo tiene 3 elementos , nombraremos la posicion 0 con algun nombre
 * en este caso personaje1 , la posicion 1 como personaje2 y posicion 2 como personaje3
 */
const [personaje1, personaje2, personaje3] = arreglo;
console.log(personaje1);
console.log(personaje2);
console.log(personaje3);

/**
 * Si se requiere solamente ocupar alguna posicion en especifico usaremos el caracter ',' para
 * indicarque se esta saltando una posicion: ejemplo
 * onst [,,trunks ] = arreglo; al indicar dentro de la desestructuracion [,,trunks] estamos
 * indicando que se tomara el ultimo elemento ya que al colocar ,, estamos indicando que saltaremos
 * a la posicion 2, en caso de que se desee usar la posicion 1 se realizaria lo siguinete
 * onst [,vegueta, ] = arreglo;
 */
const [,,trunks ] = arreglo;
console.log(trunks);

const retornaArreglo = () =>{
    return ['abc', 123];
};
const [,numeros] = retornaArreglo();
console.log(numeros);

const usesState = (valor) =>{
    return [valor, ()=> console.log('hola mundo')];
};

const [nombre, setNombre ] = usesState('jesus');
console.log(nombre);
setNombre();
