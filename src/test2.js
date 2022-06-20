import React, {Component} from 'react';
import './App.css'

class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = props;

    }
    
    render() {

        return(
        
            <div className="App-header">
                <h1> Hello, {this.state.name}  </h1>

            </div>
        
        )
    }
}

export default Test2;