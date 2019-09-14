import React, { Component } from 'react';

import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts');
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default PostList;