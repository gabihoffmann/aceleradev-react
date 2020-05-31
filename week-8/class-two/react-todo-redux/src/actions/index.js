
export function getTodos(){
    // console.log('get todo action')
    //A action retorna um objeto js, que precisa de um type
    //que identifica a action para o reducer
    //e qualquer informação é passada pelo payload (boa pratica)
    return {
        //o type é quem identifica a action
        type: 'GET_TODOS'
    }
}

//Criando a action do setTodo
//que precisa ser ouvido pelo Reducer
export function setTodo(todo){
    return {
        type: "SET_TODO",
        payload: todo
    }
}


export function setTodos(){
    return{
        type: "SET_TODOS",
    }
}

export function deleteTodo(index){
    return{
        type: "DELETE_TODO",
        payload: index
    }
}

export function setEditing(index){
    return{
        type: "SET_EDITING",
        payload: index
    }
}

export function setTodosEditing(){
    return{
        type: "SET_TODOS_EDITING"
    }
}