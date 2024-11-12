import React, { Component } from "react";
//this is used for fetching the data from the arrayusing the map function.
export default class List extends Component {
  state = {
    data: [{ name: "binil" ,  age: 40 ,  place: "choondal" },{ name: "binil" ,  age: 40 ,  place: "choondal" }]
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((value, index) => (
            <li>
              {value.id}-{value.age}-{value.name}-{value.place}
            </li>
            
          ))}
        </ul>
      </div>
    );
  }
}
