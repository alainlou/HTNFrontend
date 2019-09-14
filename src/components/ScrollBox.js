import React, { Component } from 'react';

import Axios from 'axios';

import Section from './Section';

var data = {
    "economy" : [
        {
            "text": "hello",
            "context": "lmao"
        }
    ],
    "foreign": [
        {
            "text": "hello2",
            "context": "lmao2"
        }
    ],
    "health": [
        {
            "text": "hello",
            "context": "lmao3"
        }
    ],
    "gun": [
        {
            "text": "hello4",
            "context": "lmao4"
        }
    ]
}

class ScrollBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            economy: null,
            foreign: null,
            health: null,
            gun: null
        }
    }
    render() {
        return(
            <div className="scroll">
                <Section 
                title="Economy"
                data={this.state.economy}/>
                <Section title="Foreign Relations"
                data={this.state.foreign}/>
                <Section title="Healthcare"
                data={this.state.health}/>
                <Section title="Gun Control"
                data={this.state.gun}/>
            </div>
        );
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        // Axios.get("../../");
        console.log("hello");
        this.setState({
            economy: data.economy,
            foreign: data.foreign,
            health: data.health,
            gun: data.gun
        });
        console.log(this.state);
        this.forceUpdate();
    }
}

export default ScrollBox;