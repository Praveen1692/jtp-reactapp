import React, { Component } from 'react'
import ChildComponents from './ChildComponents';

class ParentComponents extends Component {

   constructor(props){
    super(props)
    this.state={
        parentName:'Parent'
    }
    this.greetParent=this.greetParent.bind(this);
   }
   

   greetParent(){
    alert(`Hello ${this.state.parentName} j`);
   }
    
 
   
    
  render() {
    return (
      <div>

        ParentComponents
        <ChildComponents greetHandler={this.greetParent} />
        
    </div>

    )
  }
}

export default ParentComponents