
import {sumar, multiplicar, restar, dividir} from'../maths.js';

describe ('calculos matematicos', ()=>{
test('prueba de suma', ()=>{
    expect(sumar(1,1)).toBe(2);
   });
});