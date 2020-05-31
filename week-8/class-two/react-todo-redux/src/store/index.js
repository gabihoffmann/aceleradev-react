//Store Redux - A única fonte de verdade (informação) da aplicação
import {createStore} from 'redux'

//importa o reducer
import reducer from '../reducers';

// //estado inicial -> é criado pelo reducer
// const state = {
//     todo: "",
//     todos: []
// }

// criando a store que ira retornar o estado da aplicação
// const Store = createStore(() => state);
//Quem vai aterar o state é o reducer que retorna o novo state
const Store = createStore(reducer)

export default Store;