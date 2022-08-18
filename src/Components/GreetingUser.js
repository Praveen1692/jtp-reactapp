import React, { Component } from 'react'

class GreetingUser extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIN:true
      }
    }
  render() {
   
    return (

        this.state.isLoggedIN && <div>Welcome Sir</div>
      
    )
  }
}

export default GreetingUser