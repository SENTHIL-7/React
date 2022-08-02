import React from 'react'

// import React, { Component } from 'react'

export default class ShowTime extends React.Component {
   constructor(props) {
     super(props);
   
     this.state = {
        time:new Date()
     }
   }
   componentDidUpdate(){
    setInterval(
        () =>this.showTime(),1000
    )
   }
   showTime(){
    this.setState({time:new Date()})
   }
  render() {
    return (
      <div>ShowTime is {this.state.time.toLocaleTimeString()}</div>
    )
  }
}
