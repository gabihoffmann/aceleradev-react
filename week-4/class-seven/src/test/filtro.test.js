const filtro = require('../filtro');

describe("Filtro", ()=>{
    describe('Status', ()=> {
        it("Retorna somente os vivos", ()=>{
            const response = filtro.filterByStatus();
            expect((response.length).toBe(20));
        })

    })
})