import React, {Component} from 'react'
import './TasksComplete.css'

class TasksComplete extends Component {
    constructor(props){
        super(props)
        this.state = {
            done: 0
        }

    }

    taskCount(){
        this.setState({
            done: ++this.state.done
        })
    }

    render(){
        return ( 
        <div className="taskCount">
           <h2>Tasks Finished: { this.props.total }</h2>
        </div> 
        )
    }
}
export default TasksComplete
