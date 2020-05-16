import React, {useState} from 'react'

const Todo = () => {
    // Hooks
    const [task , updateTask] = useState('')
    const [tasks, updateTasks] = useState([])

    const handleInputChange = event => updateTask(event.target.value)

    const handleFormSubmit = event => {
        event.preventDefault();
        if(task.trim()){
            updateTasks([...tasks, task])
            updateTask('')
        }
    }

    return (
    <>{/* Fragment */}
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                onChange={handleInputChange}
                placeholder= "Digite uma nova tarefa aqui"
                value={task}/>
            <button
                type="submit"
                >Add new task</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Todo</th>
                </tr>
            </thead>
            <tbody>
            {tasks.map((t, index)=>(
                <tr key={index} >{t}</tr>
            ))}
            </tbody>
        </table>
    </>
    )
}

export default Todo