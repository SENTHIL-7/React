import React from 'react'


export default class ShowTime extends React.Component {
   constructor(props) {
     super(props);
   
     this.state = {
        time:new Date()
     }
   
   }
 
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time : new Date()
      })
    }, 1000)
  }

   showTime(){
    this.setState(state=>({time:new Date()}))
   }
  render() {
    return (
      <div>ShowTime is {this.state.time.toLocaleTimeString()}</div>
    )
  }
}
