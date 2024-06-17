import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones.js";


describe('prueba funciones ',()=>{

    test('debe retornar un objeto', ()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect(testUser).toEqual(user);
    });

    test(' getUsuarioActivo debe retornar un nombre', ()=>{
       const name = 'jesus';
        const {username} = getUsuarioActivo('jesus');
       expect(name).toEqual(username);
    });

})