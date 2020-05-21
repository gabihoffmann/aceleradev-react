import React, {useState} from 'react'

export default function ExampleWithHook(){

    const [count, setCount] = useState(0);

    return(
        <div className="container">
            <h2>Meu primeiro Hook</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Clik me</button>
        </div>
    )
}