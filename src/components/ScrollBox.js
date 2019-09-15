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
    changePlaytime(){
        this.props.changePlaytime();
    }
    allKeys() {
        if (!this.props.content){
            return <p>No Content</p>;
        }
        let rows = Object.keys(this.props.content).map((key, index) => {
            return (
                <li>
                    <Section title={key} data={this.props.content[key]} changePlaytime={this.changePlaytime.bind(this)} />
                </li>
            );
        })
        return <ul>{rows}</ul>
    }
    render() {
        return(
            <div className="scroll">
                {this.allKeys()}
                {/* <Section title="Climate Change" data={this.props.content["climate change"]} changePlaytime={this.changePlaytime.bind(this)}/>
                <Section title="Guns" data={this.props.content["guns"]}  changePlaytime={this.changePlaytime.bind(this)}/>
                <Section title="Minimum Wage" data={this.props.content["minimum wage"]} changePlaytime={this.changePlaytime.bind(this)}/>
                <Section title="Mental Health" data={this.props.content["mental health"]} changePlaytime={this.changePlaytime.bind(this)}/> */}
            </div>
        );
    }

}

export default ScrollBox;