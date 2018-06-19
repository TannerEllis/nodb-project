import React, { Component } from 'react';
import './CompletedButton.css'


class CompletedButton extends Component{
    constructor(){
        super()
        this.state = {
            task: 'Complete'
        }
    }
  
      
    render(){
        return ( 
            
      <button className="completeButton" onClick={()=> this.props.taskComplete(this.props.id, this.state.task)}>Complete</button>
        )
    }
}

export default CompletedButton;