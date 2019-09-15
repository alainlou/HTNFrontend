import React, { Component } from 'react';

class TimeLink extends Component {
    render() {
        return (
            <p className="time-link">{this.props.name}</p>
        );
    }
}

export default TimeLink;