import React, {useState, useEffect} from 'react';

// useSelector é um Hook para conectar o componente a Store
//o useDispatch tambem é um Hook que faz a action chegar no reducer
import {useSelector, useDispatch} from 'react-redux'

import './App.css';
import Item from './components/Item'

//importação da(s) actions
import {
  getTodos,
  setTodo,
  setTodos,
  deleteTodo,
  setEditing,
  setTodosEditing
} from './actions';

function App() {

    //O state que era local, passa a ser Global com a STORE do redux
  // const [todo , setTodo] = useState("");
  // const [isEditing, setEditing] = useState(-1);
  // const [todos, setTodos] = useState([]);

  //criando o dispatch que é uma função redux
  //que unica maneira de desencadear uma mudança de estado
  const dispatch = useDispatch();

  //O userSelector está se conectando com a Store
  //Agora o estado vem da State
  const {todo, todos, isEditing} = useSelector((state) => state )
  // console.log(store);

  //O useSelector conectou o componente(view) a store
  //para que a action funcie, ele que faz a action chegar ao reducer
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch])
  
  const handleSubmit = e => {
    e.preventDefault();
    
    if(isEditing >= 0){
      dispatch(setTodosEditing());
      dispatch(setEditing(-1));
    }else{
      dispatch(setTodos());
    }
    dispatch(setTodo(""));
  }

  //Agora preciso atualizar o State da Store
  //Crio a action de setTodo e envolve com o dispatch
  const handleChange = event => {
    dispatch(setTodo(event.target.value))
  }

  const handleDelete = index => {
      dispatch(deleteTodo(index));
  }

  const handleEdit = (index) => {
    dispatch(setTodo(todos[index]));
    dispatch(setEditing(index));
  }

    return (
      <div className="App">
        <h1>To Do (initial using Hooks)</h1>
        <section>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="todo"></label>
                <input  type="text" value={todo} 
                        onChange={handleChange}/>
                <button type="submit">Add</button>
            </div>
          </form>
        </section>
        <div className="list-todo">
          <ul className="todos">
            {todos.map((todo, index)=>(
              <Item 
                key={index}
                todo={todo}
                index={index}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    );

}

export default App;
