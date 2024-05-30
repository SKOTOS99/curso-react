

console.log("hola mundo");

//variables y constnates
// no se van a modificar
const  nombre = 'jesus';
const apellido = 'Mendoza';

let valorDado= 5;
valorDado = 4;

console.log(nombre, apellido,  valorDado);

if(true) {
    /**
     * Como las variables valorDado y nombre estan en un diferente bloque si es permitido tenerel mismo nombre ya que
     * no se modifica e valor por lo tanto son variables distitas.
     * @type {number}
     */
    let valorDado = 6;
    const nombre = 'felipe';
    console.log( nombre, valorDado);

}