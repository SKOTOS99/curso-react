
import getHeroeById from "./bases/08-imports-exports";


//const promesa = new Promise((resolve, reject)=> {
//   setTimeout(()=>{
//     const heroe = getHeroeById(8 );
//     //tranferir el resultado de la consulta al then con resolve
//     resolve(heroe);
//     //en caso de que algo saliera mal se usa reject
//     reject('No se encontro heroe')
//   }, 2000)
//
// });
//
// promesa.then((heroe)=>{
//   console.log(heroe)
// })
// .catch((err)=>console.warn(err))
//});

const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const heroe = getHeroeById(id);
            //tranferir el resultado de la consulta al then con resolve

            //en caso de que algo saliera mal se usa reject

            heroe != null
                ? resolve(heroe)
                : reject(heroe != null ? heroe:'No se encontro heroe')

        }, 2000)

    });

};
getHeroeByIdAsync(9)
    .then(console.log)
    .catch(console.warn);
