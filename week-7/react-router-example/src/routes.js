import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Params from './components/Params';


const Routes = ()=>(
    <BrowserRouter>
    <>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/users/1">User id 1</Link></li>
          <li><Link to="/users/2">User id 2</Link></li>
            <li><Link to={
                {
                    pathname: '/params',
                    state: {from : "React Router Class"}
                }
            }>Router params</Link></li>
        </ul>
    </nav>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users/:id?" component={Users} />
            <Route path="/params" component={Params}/>
            <Route path="*" component={()=> <h1>Page not found</h1>} />
        </Switch>
    </>
    </BrowserRouter>

)


export default Routes;