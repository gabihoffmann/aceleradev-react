import React from 'react'

export default function Item({todo,index,onEdit,onDelete}){
    return(
        <div className="item">
            <li>{todo}</li>
            <button onClick={()=> onEdit(index)}>Edit</button>
            <button onClick={()=> onDelete(index)}>Delete</button>
        </div>
    )
}