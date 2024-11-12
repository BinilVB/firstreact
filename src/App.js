import { Component } from "react";
import "./App.css";
import Todo from "./component/Todo";
import Hal from "./component/Hal";
import Counter from "./component/Counter";
import Form from "./component/Form";
import List from "./component/List";
// function App() {
//   return (
//     <div className="App">
//       <h1>hallo</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    myString: "hallo",
    myStringOne: "BINil",
  };
  changeState = () =>{
    this.setState({
      myStringOne:"byeee"
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.myString}</h1>
        <h1>{this.state.myStringOne}</h1>
        <button onClick={this.changeState}>change text</button>
        <Todo myString={this.state.myString} />
        <Counter />
       <Form />
       <List />
       <Headers />
       <About />
      </div>
    );
  }
}
export default App;
