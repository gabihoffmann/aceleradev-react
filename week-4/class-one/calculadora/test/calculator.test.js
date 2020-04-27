const calc = require("../calculator");

describe("Exemplo de teste", () => {
    it('primeiro exemplo de teste, somando dois números', () => {
        const num1 = 2;
        const num2 = 5;
        expect(num1+num2).toBe(7);
        expect(num1+num2).not.toBe(8); //Teste que esperamos erro
    });
});

describe('Testando a calculadora', () => {

    describe("Função somar", ()=>{
        it('Retorna 7 quando soma 2 com 5', ()=>{
            const num1 = 2;
            const num2 = 5;

            expect(calc.somar(num1,num2)).toBe(7);
        });
    });

    describe("Função subtrair", ()=>{
        it('Retorna 3 quando subtrai 2 de 5', ()=>{
            const num1 = 5;
            const num2 = 2;

            expect(calc.subtração(num1,num2)).toBe(3);
        });
     });

     describe("Função multiplicar", ()=> {
         test('Retorna 10 quando multiplica 2 e 5', ()=> {
             const num1 = 2;
             const num2 = 5;

             expect(calc.multiplicação(num1,num2)).toBe(10);
         });
     });

     describe('Função dividir', () => {
         test('Retorna 2 quando divide 10 por 5', ()=>{
             const num1 = 10;
             const num2 = 5;

             expect(calc.divisão(num1,num2)).toBe(2);
         });
     });
     


});