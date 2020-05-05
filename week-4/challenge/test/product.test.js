const { products } = require('../src/data/products');
const produto = require('../src/produto');


describe('Testes Unitários', () => {
    it('Retorna array contendo os produtos dos respectivos ids', ()=>{
        const response = produto.findProducts([120,130], products);
        //console.log(`Response teste do id: ${JSON.stringify(response)}`)
        expect(response.length).toBe(2);
    });
 
    it('Retorna um objeto contendo a chave products que contem os nomes e categoria dos produtos', () => {
        const example = {
         products: [
             { name: 'DISNEY CRUELLA© T-SHIRT', category: 'T-SHIRTS' },
             { name: 'KNIT JOGGING PANTS', category: 'PANTS' },
             { name: 'ASYMMETRICAL LEATHER SLIDE HEELS', category: 'SHOES' },
             { name: 'SOFT FLAP BACKPACK', category: 'BAGS' }
         ]}
        const response = produto.filterNamesCategory([120, 230, 310, 490], products);
        //console.log(`Response teste do id: ${JSON.stringify(response)}`)
        expect(response).toEqual(example);
    });
 
    it('Retorna o valor total dos produtos sem desconto', () => {
         const example = 479.96;
         const response = produto.fullPrice([120, 230, 310, 490], products);
         expect(response).toBe(example);
    })
 
    it('Retorna o tipo da promoção aplicada - Exemplo FULL LOOK', () =>{
        const example = {promotion: 'FULL LOOK'};
        const response = produto.filterPromotion([120, 230, 310, 490], products);
        //console.log(`Response teste do id: ${JSON.stringify(response)}`)
        expect(response).toEqual(example);
    });
 
    it('Retorna o tipo da promoção aplicada - Exemplo DOUBLE LOOK', () =>{
        const example = {promotion: 'DOUBLE LOOK'}
        const response = produto.filterPromotion([130, 140, 230, 260], products);
        expect(response).toEqual(example);
    });
 
    it('Retorna o valor total dos produtos com o desconto da promoção aplicada', ()=>{
         const example = {totalPrice: '404.96'}; 
         const response = produto.discountedAmount([120, 230, 310, 490], products);
         //console.log(`Response: ${JSON.stringify(response)}`)
         expect(response).toEqual(example);
    });
 
    it('Retorna o valor total do desconto', () => {
        const example = {discountValue: '75.00'}
        const response = produto.discountValue([120, 230, 310, 490], products);
        expect(response).toEqual(example);
    });
 
    it('Retorna o percentual do desconto',() => {
        const example = {discount: '15.63%'}
        const response = produto.discountPercentage([120, 230, 310, 490], products);
        expect(response).toEqual(example);
    })
    
 });