import React, { Component } from 'react'

export class Raf extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:'www.javaTpoint.com'
      }
      this.handleEvent=this.handleEvent.bind(this);

    }
    handleEvent(){
        console.log(this.props);
        console.log("Button CLicked");
    }
  render() {
    return (
      <div>

        <h2>React constructor Example</h2>
        <input type='text' value={this.state.data} />
        <button onClick={this.handleEvent}>Pls click me</button>




       
        
    </div>
    )
  }
}

export default Raf