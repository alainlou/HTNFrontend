import React, { Component } from 'react';

import Axios from 'axios';

import Section from './Section';
import { all } from 'q';

class ScrollBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: this.props.content,
            playtime: 0
        }
        this.allKeys = this.allKeys.bind(this);
    }
    // render() {
    //     return(
    //         <div className="scroll">
    //             <h2>{this.props.name}</h2>
    //             <Section 
    //             title="Economy"
    //             data={this.state.content.economy}/>
    //             <Section title="Foreign Relations"
    //             data={this.state.content.foreign}/>
    //             <Section title="Healthcare"
    //             data={this.state.content.health}/>
    //             <Section title="Gun Control"
    //             data={this.state.content.gun}/>
    //         </div>
    //     );
    // }

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.setState({
            content: this.props.content
        });
        this.forceUpdate();
    }
    allKeys() {
        if (!this.props.content){
            return <p>No Content</p>;
        }
        let rows = Object.keys(this.props.content).map((key, index) => {
            return (
                <li>
                    <Section title={key} data={this.props.content[key]}/>
                </li>
            );
        })
        return <ul>{rows}</ul>
    }
    render() {
        return(
            <div className="scroll">
                {this.allKeys()}
            </div>
        );
    }

}

export default ScrollBox;