

const  nombre = 'jesus';
const apellido = 'mendoza';
/**
 * const nombreCompleto = nombre + ' ' + apellido;
 *
 * una forma de concatenar distintas variables haciendo uso de template
 * string el cual se se identifica con los caracteres `$`
 * @type {string}
 */
const nombreCompleto = `${nombre} ${apellido}`;


console.log(nombreCompleto)

function getSaludo(nombreCompleto){
    return `nombre completo: ${nombreCompleto}`;
}

console.log(` ${getSaludo(nombreCompleto)}
edad: 28`);