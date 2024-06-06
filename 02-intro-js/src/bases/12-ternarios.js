


const activo = true;

const mensaje = activo ? 'Activo' : 'Inactivo';

/*
Una forma simplificada de usar ternarios es con el uso de los caracteres && lo cual nos indica que solo se va a ejecutar
una sola intruccion.
 */
const mensaje2 = activo && 'Activo';

console.log(mensaje);
console.log(mensaje2);