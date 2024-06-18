import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp.js";


describe('Prueba de funciones con alguna dependencia', ()=>{

    test('deber retornar un objeto heroe', ()=>{
        const {name} = getHeroeById(3);

        expect(name).toBe('Superman');
    });

    test('cuando no existe el id', ()=>{
        const hero = getHeroeById(9);
       // expect(hero).toEqual(undefined);
        expect(hero).toBeFalsy();
    });

    test('deber retornar un owner de dc', ()=>{
        const flash =[{"id": 1, "name": "Batman", "owner": "DC"}, {"id": 3, "name": "Superman", "owner": "DC"}, {"id": 4, "name": "Flash", "owner": "DC"}];
        const ownerFlash = getHeroesByOwner('DC');
        expect(ownerFlash).toEqual(flash);
        expect(ownerFlash.length).toEqual(3);
    });

    test('deber retornar un owner de marvel', ()=>{
        const wolverin =[{"id": 2, "name": "Spiderman", "owner": "Marvel"}, {"id": 5, "name": "Wolverine", "owner": "Marvel"}];
        const ownerWolverin = getHeroesByOwner('Marvel');
        expect(ownerWolverin).toEqual(wolverin);
        expect(ownerWolverin.length).toBe(2);
    });
});