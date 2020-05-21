import React, {useState , useEffect} from 'react'

export default function ExampleWithUseEffects(){
    const [name , setName] = useState("");

    /**
     * useEffects são Hooks para efeitos colaterais
     * Similar aos ciclos DidMount, DidUpdate e WillUnmount
     * Onde o primeiro parametro é uma função e o segundo é o array de dependencias
     */
    useEffect(()=> {
        alert(` aconteceu o "DidMount"`)
    }, [])

    useEffect(()=> {
       if(name === 'react') alert(" aconteceu o didUpdate dependente de name === react ")
    }, [name])
    

    const handleChange = (e) => {
        setName(e.target.value)
    }
   
    return(
        <div className="container">
            <h2>useEffect: DidMount e DidUpdate</h2>
            <input type="text" placeholder="Digite: react"
                value={name} onChange={handleChange}/>
            <p>{name}</p>
        </div>
    )
}