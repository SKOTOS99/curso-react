import {getSaludo} from "../../src/base-pruebas/02-template-string.js";

describe('pruebas 02 template string', () => {
    test('template string', ()=>{
        const name = 'jesus';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);

    });
});