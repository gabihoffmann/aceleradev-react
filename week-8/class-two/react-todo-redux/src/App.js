import React, {useState} from 'react';

import './App.css';
import Item from './components/Item'

function App() {

  const [todo , setTodo] = useState("");
  const [isEditing, setEditing] = useState(-1);
  const [todos, setTodos] = useState([]);
  
  const handleSubmit = e => {
    e.preventDefault();
    
    if(isEditing >= 0){
      setTodos(
      todos.map((t,i) => {
        if(i === isEditing){
          return todo
        }
        return t
      })
    );
    setEditing(-1);
    }else{
      setTodos([...todos , todo])
    }
    setTodo("");
  }

  const handleChange = event => {
    setTodo(event.target.value)
  }

  const handleDelete = index => {
      setTodos(todos.filter((todo,i) => i !== index))
  }

  const handleEdit = (index) => {
    setTodo(todos[index])
    setEditing(index)
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
