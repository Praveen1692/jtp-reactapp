import React, { Component } from 'react'
import { ReactDOM } from 'react'

export class Raf extends Component {
  constructor() {
    super()
    this.findDomNodeHandler1=this.findDomNodeHandler1.bind(this);
    this.findDomNodeHandler2=this.findDomNodeHandler2.bind(this);
  
   
  }
  findDomNodeHandler1(){
    var myDiv=document.getElementById('myDivOne');
    ReactDOM.findDOMNode(myDiv).style.color = 'red';  
  }
  findDomNodeHandler2(){
    var myDiv=document.getElementById('myDivTwo');
    ReactDOM.findDOMNode(myDiv).style.color = 'red';  
  }
    
  render() {
    return (
      <div>
        <h1>React js FInd Dom Example</h1>
        <button onClick = {this.findDomNodeHandler1}>FIND_DOM_NODE2</button> 
        <button onClick={this.findDomNodeHandler2}>FInd Dom 2</button>
        <h3 id='myDivOne'>Node 1</h3>
        <h3 id='myDivTwo'>Node 2</h3>

       



       
        
    </div>
    )
  }
}

export default Raf