import React from 'react'
import {useParams} from 'react-router-dom'
const usersAPI = [
    {id: 1 , name: "Chaves" },
    {id: 2 , name: "Kiko" },
    {id: 3 , name: "Seu Madruga" },
    {id: 4 , name: "Chiquinha" },
]

export default function Users(props){
    
    console.log(props)
    

    let users = usersAPI;
    const {id} = useParams();
    //useParams é um HOOKS de react-router, para pegar o props.match.params 

    if(id){
        users = users.filter((user)=> (user.id === parseInt(id,10)))
    }

    return(
        <div>
            <h2>Users</h2>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}