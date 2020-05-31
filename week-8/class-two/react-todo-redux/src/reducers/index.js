/**
 * As ACTIONS escutam as ações do usuários ou da propria aplciação
 * mas não realizam nenhuma ação no STATE para isso usamos
 * os REDUCERS, que ouvem as actions e alteram o state.
 */

 //Criando o state inicial
const INITIAL_STATE = {
    todo: "",
    todos: [],
    isEditing: -1
}

//Criando o reducer,passando o state e action
//O initial state é montanto com esse primieiro state
function reducer(state = INITIAL_STATE, action){
    //dentro do reducer tenho um sitch pro type da action
    switch(action.type){
        case "GET_TODOS":
            return {
                ...state,
                todos: ["todo 1", "todo2"] 
            }
        //Reducer para o set todo
        case "SET_TODO":
            return{
                ...state,
                todo: action.payload
            }

        case 'SET_TODOS':
            return{
                ...state,
                todos: [...state.todos, state.todo]
            }

        case 'DELETE_TODO':
            return{
                ...state,
                todos: state.todos.filter((_,i) => i !== action.payload)
            }

        case 'SET_EDITING':
            return{
                ...state,
                isEditing : action.payload
            }
        
        case "SET_TODOS_EDITING":
            return{
                ...state,
                todos: state.todos.map((todo,index)=>{
                    if(index === state.isEditing){
                        return state.todo;
                    }
                    return todo
                })
            };

        default: //retorna o state atual
            return state;
    }
}

export default reducer;