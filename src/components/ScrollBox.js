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