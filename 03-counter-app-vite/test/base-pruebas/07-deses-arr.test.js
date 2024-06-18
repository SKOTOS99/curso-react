import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr.js";


describe('debe retornar un arreglo', () => {

    test('debe ser mayor a 1', () => {
       const arr = retornaArreglo();
       expect(arr.length).toBe(2);
    });
    test('debe retornar string y numero', () => {
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
    });
    test('debe retornar string y number', () => {
        const [letters, numbers] = retornaArreglo();
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(numbers).toStrictEqual(expect.any(Number));
        expect(letters).toStrictEqual(expect.any(String));
    })

});