import React from 'react'
import logo from '../logo.svg';
//Pacote para checagem de tipo
import PropTypes from 'prop-types'

//criando uma função que recebe como parametro um componente
export const withLoading = Component => {
    //criando uma função que cria um novo componente
    // e recebe as props como argumento
    const WithLoading = ({data}) =>
    data
        ? <Component data={data} />
        : <img
            alt="logo"
            className="App-logo"
            scr={logo}
            style={{display: 'block', margin: '0 auto'}}
            />

    WithLoading.propTypes = {
        data: PropTypes.bool //declando o tipo booleano
    }

    return WithLoading;
}