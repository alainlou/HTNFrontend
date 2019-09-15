import React from 'react';
import ReactPlayer from 'react-player';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'antd'; 
import 'antd/dist/antd.css';

import ScrollBox from './components/ScrollBox';
import data from './components/data';

import './App.css';
import { AST_Node } from 'terser';
import { animationFrameScheduler } from 'rxjs';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchWord: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({searchWord: event.target.value.toLowerCase() || ""});
  }
  onSubmit(event){
    event.preventDefault();
  }
  render(){
    return (
      <div className="container-fluid">
        <Navbar bg="light" expand="lg" className="navbar">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>   
        <div className="grey-background">
          <ReactPlayer className="middle-align" url='https://www.youtube.com/watch?v=MCUERO0gYBc' playing />
        </div>
        <div className="flex-container my-3">
          <span className="col-12">
            <form onSubmit={this.onSubmit}>
              <input type="text" placeholder="Enter Keywords Here" onChange={this.handleChange} className="form-control"/>
            </form>
          </span>
        </div>
        <div className="flex-container my-3">
          <ScrollBox content={data}>
          </ScrollBox>
        </div>
      </div>
    );
  }
}

export default App;
