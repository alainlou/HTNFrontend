import React, {Component} from 'react';
import ReactSearchBox from 'react-search-box';

import Axios from 'axios';

class SearchUrl extends Component{
    constructor(props){
        super(props);
        this.state = {url: ""};
        this.handleChange = this.handleChange.bind()
    }

    handleChange() {
        this.props.onUserInput(
          this.refs.filterTextInput.value,
        );
    }

    render(){
        return(
            <div className="container">
                <form>
                    <input type="text" placeholder="Search..." 
                    onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default SearchUrl;