import React, { Component } from 'react';

class Section extends Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (            
            <div className="fill">
                <h5>{this.props.title}</h5>
                {this.rows()} 
                <hr></hr>
            </div>
        )
    }
    rows() {
        if(this.props.data === null)
        return;
        let rows = this.props.data.map((element) => {
            return (
                <li>
                    <p>{element.text} - {element.context}</p>
                </li>
            );
        })
        return <ul>{rows}</ul>
    }
}

export default Section;