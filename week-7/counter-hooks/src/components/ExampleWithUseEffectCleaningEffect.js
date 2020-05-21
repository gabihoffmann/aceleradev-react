import React, {useState, useEffect} from 'react'

const api = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve(["User 1", "User 2"]);
        }, 2000);
    });
}

function Loading(){
    useEffect(() => {
        console.log("Loading...")
        return () => {
            console.log("Loading OK")
    }//retorna uma função no efeito é um modo de limpar
    })

    return <h1>Loading ...</h1>
}


export default function ExampleWithUseEffectCleaningEffect(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        api().then(response => {
            setUsers(response);
            setLoading(false);
        });
    }, [])
    
    return(
        <div className="container">
            <h2>useEffect: WillUnmount</h2>
            <p>Olhe o console.log</p>
            {loading && <Loading />}
            <ul>{
                users.map((user,index)=>(
                    <li key={index}>{user}</li>
                ))
            }</ul>
        </div>
    )
}
