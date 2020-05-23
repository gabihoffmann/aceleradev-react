import React from 'react';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Home from './pages/Home/index';
import About from './pages/About/index';
import Team from './pages/Team/index';
import Profile from './pages/Profile/index';

//rotas
import {BrowserRouter as Router, Switch , Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>GitHub Example</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/about">About</Link></Nav.Link>
          <Nav.Link><Link to="/team">Team</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:name" component={Profile} />
          <Route exact path="/team" component={Team} />
        </Switch>
  

    </div>
    </Router>
  );
}

export default App;
