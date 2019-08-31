import React, { Component } from "react";
import "./App.css";
import Button from './components/button'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      current:'0',
      previous : []
    }
  }
  reset = ()=>{
    this.setState({current:'0'});
  }
  addToCurrent = (symbol)=>{
    this.setState({current:this.state.current+symbol})
  }
  render() {
    const buttons =[
      {symbol:'C',col:3,action:this.reset},
      {symbol:'/',col:1,action:this.addToCurrent},
      {symbol:'7',col:1,action:this.addToCurrent},
      {symbol:'8',col:1,action:this.addToCurrent},
      {symbol:'9',col:1,action:this.addToCurrent},
      {symbol:'X',col:1,action:this.addToCurrent},
      {symbol:'4',col:1,action:this.addToCurrent},
      {symbol:'5',col:1,action:this.addToCurrent},
      {symbol:'6',col:1,action:this.addToCurrent},
      {symbol:'-',col:1,action:this.addToCurrent},
      {symbol:'1',col:1,action:this.addToCurrent},
      {symbol:'2',col:1,action:this.addToCurrent},
      {symbol:'3',col:1,action:this.addToCurrent},
      {symbol:'+',col:1,action:this.addToCurrent},
      {symbol:'0',col:2,action:this.addToCurrent},
      {symbol:'.',col:1,action:this.addToCurrent},
      {symbol:'=',col:1,action:this.addToCurrent},
    ]
    return (
      <div className="App">
        <input
          type="text"
          className="result"
          value={this.state.current}
        ></input>
        {buttons.map((btn,i)=>{
          return <Button symbol={btn.symbol} cols={btn.cols} action={(symbol)=>btn.action} />
        })}
      </div>
    );
  }
}

export default App;
