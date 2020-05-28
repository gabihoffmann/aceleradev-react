import React from 'react'
import {withLoading} from '../hocs/withLoading';
const Infos = () => (
    <ul
        style={{clear: 'both', display: 'block', listStyle: 'none'}}>
        <li>
            <img src="https://avatars0.githubusercontent.com/u/19999475" alt="myself"/>
        </li>
        <li>My name: Gabriella Hoffmann</li>       
        <li>My username: gabihoffmann</li>
    </ul>
);

//Envolvendo o componete INFOS com o HOC
export default withLoading(Infos);