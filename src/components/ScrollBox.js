import React, { Component } from 'react';

import Axios from 'axios';

import Section from './Section';
import { all } from 'q';

class ScrollBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: this.props.content
        }
        this.allKeyWords = this.allKeyWords.bind(this);
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
    allKeyWords(){
        console.log(this.props.content);
        let allWords = this.state.content.map((element) => {
            return (
                <Section title={element.name} data={element.appearances}/>
            );
        })
        return allWords;
    }
    render() {
        return(
            <div className="scroll">
                
            </div>
        );
    }

}

export default ScrollBox;