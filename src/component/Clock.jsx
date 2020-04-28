import React, { Component } from 'react';
class Clock extends Component {
    
    render() { 
        return ( <div>
            <h1> Example using class</h1>
            <h1 style={{'color':'red'}}> Time now is {this.props.date.toLocaleTimeString()}</h1>
        </div> );
    }
}

export default Clock;