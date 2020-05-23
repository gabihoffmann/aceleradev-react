import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">GitHub Example</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/link">Profile</Nav.Link>
          <Nav.Link href="/link">About</Nav.Link>
          <Nav.Link href="/link">Team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default App;
