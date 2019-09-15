import React from 'react';
import ReactPlayer from 'react-player';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Card } from "react-bootstrap";

import ScrollBox from './components/ScrollBox';

import './App.css';

import Bernie from './img/bernie.jpg';

import data from './components/data';
import Axios from 'axios';
import { CardBody, CardHeader } from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchWord: "",
      data: data,
      videoUrl: "https://www.youtube.com/watch?v=MCUERO0gYBc"
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    this.setState({searchWord: event.target.value.toLowerCase() || ""});
  }

  onSubmit(event){
    Axios.get("https://htnbackend.appspot.com/", {params:{searchWord: this.state.searchWord}})
      .then(response => {
        this.setState({videoUrl: response.data.url});
      });
    event.preventDefault();
  }
  render(){
    return (
      <div className="container-fluid">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Video Indexer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
                <NavDropdown title="Choose Your Warrior" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>   
        <div className="grey-background">
          <ReactPlayer className="middle-align" url={this.state.videoUrl} playing controls/>
        </div>
        <div className="flex-container">
          <Card className="m-3 limit-x">
            <Card.Body>
              <Card.Img src={Bernie} />
              <div className="my-2">
                <Card.Title>Bernie Sanders</Card.Title>
                <Card.Text>Senator from Vermont</Card.Text>
              </div>
            </Card.Body>
          </Card>
          <div className="grow">
            <div className="m-3" id="main_section">
              <span className="col-12">
                <form onSubmit={this.onSubmit}>
                  <input type="text" placeholder="Enter Keywords Here" onChange={this.handleChange.bind(this)} className="form-control"/>
                </form>
              </span>
            </div>
            <div className="m-3 grow">          
              <ScrollBox 
              content={this.state.data}>
              </ScrollBox>
            </div>
          </div>          
        </div>
      </div>
    );
  }
}

export default App;
