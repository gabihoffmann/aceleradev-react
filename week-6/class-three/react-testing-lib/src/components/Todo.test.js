import React from 'react'
import Todo from './Todo'

import {render, waitForElement, fireEvent} from '@testing-library/react'
 
describe('Testes do componente Todo', () => {
    it('Quando o formulário for submetido deve criar um novo item na tabela', async () => {
        //Renderizando um componente
        const {getByTestId, getByText} = render(<Todo/>);
        // A função getByTestId busca pelo atributo data-testid, permite fazer teste sem estar amarrado com a UI (classes, ids, tags)
        //Buscando pelo input (busca assincrona)
        const fieldNode = await waitForElement(
            () => getByTestId('form-field')
        )
        // o fieldNode é um nó HTML o que nos permite realizar ações nativas do DOM
        //realizar esctita no input
        const event = {target: {value: 'testing'}}
        fireEvent.change(fieldNode, event);
        expect(fieldNode.value).toEqual(event.target.value);
        //Buscar pelo botão
        const btnNode = await waitForElement(()=> getByTestId('form-btn'))
        //Realizar o clique no botão
        fireEvent.click(btnNode)

        // //Busca pela table
        // const tableNode = await waitForElement(()=> getByTestId('table'))
        // console.log(tableNode.innerHTML)

        //busca pelo texto
        const tdNode = await waitForElement(() => getByText(event.target.value))
        expect(tdNode).toBeDefined()


    })
})