import React from 'react'

import {useInputCustom} from '../hooks/useInputCustom';

export default function ExampleCustomHooks(){

    const [name, setName] = useInputCustom("");
    const [email, setEmail] = useInputCustom("")

    return(
        <div className="container">
            <h2>Hooks Personalizado</h2>
            <form action="">
                <input type="text" placeholder="Nome"
                        value={name} onChange={setName}
                />
                <br/>
                <input type="email" placeholder="Email"
                        value={email} onChange={setEmail}
                />
            </form>
            <div>
                <ul>
                    <li>Nome: {name}</li>
                    <li>Email: {email}</li>
                </ul>
            </div>
        </div>
    )
}