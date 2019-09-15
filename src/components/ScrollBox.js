import React, { Component } from 'react';

import Axios from 'axios';

import Section from './Section';

// var data = {
//     "economy" : [
//         {
//             "text": "hello",
//             "context": "lmao"
//         }
//     ],
//     "foreign": [
//         {
//             "text": "hello2",
//             "context": "lmao2"
//         }
//     ],
//     "health": [
//         {
//             "text": "hello",
//             "context": "lmao3"
//         }
//     ],
//     "gun": [
//         {
//             "text": "hello4",
//             "context": "lmao4"
//         }
//     ]
// }

class ScrollBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: this.props.content
        }
    }
    render() {
        return(
            <div className="scroll">
                <Section 
                title="Economy"
                data={this.state.content.economy}/>
                <Section title="Foreign Relations"
                data={this.state.content.foreign}/>
                <Section title="Healthcare"
                data={this.state.content.health}/>
                <Section title="Gun Control"
                data={this.state.content.gun}/>
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
            content: this.props.content
        });
        console.log(this.state);
        this.forceUpdate();
    }
}

export default ScrollBox;