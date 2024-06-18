import {getHeroeByIdAsync} from "../../src/base-pruebas/09-promesas.js";


describe('prueba promesas', ()=>{

    test('getHeroeByIdAsync debe de retornar un heroe', (done)=>{
        const id = 1;

        getHeroeByIdAsync(id).then(res=>{
            expect(res).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            //se llama la funcion done para esperar que se complete la funcion de prueba
            done();
        });
    });

    test('getHeroeByIdAsync debe de retornar un error si el id no existe', (done)=>{
        const id = 100;

        getHeroeByIdAsync(id).catch(res=>{
            expect(res).toBe('No se pudo encontrar el héroe');
            //se llama la funcion done para esperar que se complete la funcion de prueba
            done();
        });
    });
});