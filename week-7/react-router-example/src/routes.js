import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

const Routes = ()=>(
    <BrowserRouter>
    <>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
    </nav>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
        </Switch>
    </>
    </BrowserRouter>

)


export default Routes;