

const persona = {
    name: 'jesus',
    firstName: 'Mendoza',
    age: 28,
    educacion: {
        escuela: "unam",
        estado: "completado"
    },
};
const datosPesonales = `nombre: ${persona.name} \napellido: ${persona.firstName} \nedad: ${persona.age}`;
console.log(datosPesonales);

console.table({persona});

/**
 * Se usa ... para indicar que se va a realiar una copia o clone de un objeto
 * @type {{firstName: string, name: string, educacion: {estado: string, escuela: string}, age: number}}
 */
const persona2 = {...persona}
console.log(persona2);