

const arreglo =[1,2,3,4];
//arreglo.push('a');
//arreglo.push('b');
//el operador spread ... genera una copia extrayendo los elemtos del arreglo y colocandolos como elementos
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(x) {
    return x * 2;
});

const arreglo4 = arreglo2.map(function(x) {
    return x % 2 === 0;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);