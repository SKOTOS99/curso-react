

const saludar = function (nombre){
    return `hola ${nombre}`;
}

const saludar2 =  (nombre)=>`hola ${nombre}`;


const arreglo = [1,2,3,4,5];

const validarArreglo = (x) => x % 2 ===0;

console.log(arreglo.map(function(x){
    return validarArreglo(x);
}));
console.log(saludar2('jesus'));

/*
* Cuando se requiere regresaar un objeto usando funciones de flecha se hace colocando el objeto dentro de parentecis
*
* */

const objeto = ()=>({
    username : 'yisus98',
    password: '1234',
    email: 'yisus98@gmail.com',
});

console.log(objeto())

//Tarea

const getUsuarioActivo = (nombre)=>({
    uid:'ABCD1234',
    username : nombre
});

console.log(getUsuarioActivo('el_yisus'));