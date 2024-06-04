



const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman'
};
const {nombre, clave} = persona;


const retornaPersona = (usr) => {
    const {nombre, clave} = usr;
    console.log(nombre);
};
retornaPersona(persona);

const retornaPersona2 = ({nombre, clave,edad}) => {

    console.log(nombre);
    console.log(clave);
    console.log(edad);
}
retornaPersona2(persona);
//Cuando se quiere desestructurar un objeto dentro de otro objeto se realiza de la siguiente manera
const retornaPersona3 = ({nombre, clave,edad, rango}) => ({
    nombreClave: clave,
    anios: edad,
    poder:{
        volar:'si',
        superFuerza:'no'
    },

});
//se usa el nombre del objeto : {} para desestructurar ese objeto
const {nombreClave, anios, poder:{volar, superFuerza}} = retornaPersona3(persona);
console.log(nombreClave);
console.table(anios);
console.log(volar);
console.log(superFuerza);
