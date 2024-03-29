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
        if(!this.props.data){
            return (<p>No content</p>);
        }
        let rows = this.props.data.map((element) => {
            return (
                <li>
                    <p>{element}</p>
                </li>
            );
        })
        return <ul>{rows}</ul>
    }
}

export default Section;