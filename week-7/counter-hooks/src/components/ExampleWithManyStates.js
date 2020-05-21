import React, {useState} from 'react'

export default function ExampleWithManyStates(){
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState('Banana');

    const handleChangeName = event => {
        setName(event.target.value);
    }

    const handleChangeFruit = event => {
        event.preventDefault();
         setFruit("Morango")
    }

    return(
        <div className="container">
            <h2>Vários Hooks</h2>
            <input type="text" placeholder="Nome" 
            value={name} onChange={handleChangeName}/>
            <p>Meu nome é: {name}</p>

            <hr/>

            <p>A fruta é {fruit}</p>
            <button onClick={handleChangeFruit}>
                Clique aqui e mude para morango</button>
        </div>
    )
}