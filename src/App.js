import React from 'react';
import ReactPlayer from 'react-player';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

import ScrollBox from './components/ScrollBox';

import './App.css';

import data from './components/data';
import Axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchWord: "",
      data: data,
      videoUrl: "https://www.youtube.com/watch?v=MCUERO0gYBc",
      playtime: 0
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  ref = player => {
    this.player = player;
  }
  handleChange(event){
    this.setState({searchWord: event.target.value.toLowerCase()});
  }

  onSubmit(event){
    if (this.state.searchWord && this.state.searchWord != ""){
      Axios.get("https://htnbackend.appspot.com/", {params:{searchWord: this.state.searchWord}})
        .then(response => {
          this.setState({videoUrl: response.data});
        });
    }
    event.preventDefault();
  }
  onSeekTo(event){
    this.player.seekTo(this.state.playtime);
    event.preventDefault();
  }
  changePlaytime(e){
    this.setState({playtime: parseInt(e.target.value)});
    e.preventDefault();
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
                <Nav.Link href="#link" onClick={this.onSeekTo}>Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>   
        <div className="grey-background">
          <ReactPlayer className="middle-align" url={this.state.videoUrl} ref={this.ref} playing controls />
        </div>
        <div className="flex-container my-3" id="main_section">
          <span className="col-12">
            <form onSubmit={this.onSubmit}>
              <input type="text" placeholder="Enter Keywords Here"  className="form-control" onChange={this.handleChange.bind(this)}/>
            </form>
            <form onSubmit={this.onSeekTo.bind(this)}>
              <input type="text" placeholder="Enter Time Here (in seconds)"  className="form-control" onChange={this.changePlaytime.bind(this)}/>
            </form>
          </span>
        </div>
        <div className="flex-container my-3">
          <ScrollBox content={this.state.data}>
          </ScrollBox>
        </div>
      </div>
    );
  }
}

export default App;
