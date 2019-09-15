import React from 'react';
import ReactPlayer from 'react-player';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'antd'; 
import 'antd/dist/antd.css';

import ScrollBox from './components/ScrollBox';
import data from './components/data';

import './App.css';
import Axios from 'axios';

function Home() {
  return (
    <div>

    </div>
  )
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchWord: "",
      data: data,
      videoUrl: "https://www.youtube.com/watch?v=MCUERO0gYBc",
      playtime: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  ref = player => {
    this.player = player;
  }
  handleChange(event){
    this.setState({searchWord: event.target.value});
  }

  handleSubmit(e){
    const { searchWord } = this.state;
    e.preventDefault()
      if (searchWord){
        console.log(this.state.searchWord.toLowerCase())
        Axios.get("https://htnbackend.appspot.com/", {
        params: {
          searchWord: this.state.searchWord
        }})
        .then(response => {
          console.log(response)
          this.setState({videoUrl: response.data}); //get request returns promise here
        });
      }
  }
  changePlaytime(e){
    this.setState({playtime: parseInt(e.target.value)});
    e.preventDefault();
  }
  render(){
    return (
      <Router> 
        <div className="container-fluid">
            <Navbar bg="light" expand="lg" className="navbar">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>  
                      <Link to='/Home'>Home</Link>
                    </Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Route exact path="/Home" component={Home} />
            </Navbar>  
          <div className="grey-background">
            <ReactPlayer className="middle-align" url={this.state.videoUrl} playing controls/>
          </div>
          <div className="flex-container my-3" id="main_section">
            <span className="col-12">
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter Keywords Here" onChange={this.handleChange.bind(this)} value={this.state.searchWord} className="form-control"/>
              </form>
            </span>
          </div>
          <div className="flex-container my-3">
            <ScrollBox content={this.state.data}>
            </ScrollBox>
          </div>
        </div>
      </Router> 
    );
  }
}

export default App;
