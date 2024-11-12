import React, { Component } from 'react'

export default class Counter extends Component {


    state={
        Counter:0
    };
    increment=()=>{
       this.setState({
        Counter:this.state.Counter +1
    });
        
    }

    decrement=()=>{
       this.setState({
        Counter:this.state.Counter -1
    });
        
    }
  render() {
    return (
      <div>
      <h2>event handler</h2>
      <h2>{this.state.Counter}</h2>
      <button onClick={this.increment}>ADD</button>
      <button onClick={this.decrement}>SUB</button>
     
        
      </div>
    )
  }
}
