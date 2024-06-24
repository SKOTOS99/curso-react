import {getImagen} from "../../src/base-pruebas/11-async-await.js";

describe('prueba de metodos asincronos', () => {

    test('deb retornar un url', async () => {

        const url = await getImagen()
        console.log(url);
        expect(typeof url).toBe('string');
    })


});