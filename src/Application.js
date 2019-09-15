import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import App from './App';
import Home from './Home';
import './App.css';

class Application extends Component {
    constructor() {
        super();
        this.state = {
          personName: "",
          videoUrl: ""
        }
    }

    render(){
        return (
            <Router>
                <div className="table">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/app/:name" component={App} />
                </div>
            </Router>
        );
    }
}

export default Application;