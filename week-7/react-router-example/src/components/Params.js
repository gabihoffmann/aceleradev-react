import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Params(){
    
    const location = useLocation();
    console.log(location)
    const {state ={}} = useLocation();
    console.log(state)

    return(
        <div>
            <h1>Params</h1>
            <p>I come from: {state.from}</p>
        </div>
    )
}