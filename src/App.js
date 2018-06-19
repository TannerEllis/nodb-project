import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header'
import CompletedButton from './components/Completed/CompletedButton'
import TasksComplete from './components/TasksComplete/TasksComplete'

import './App.css';
import NewTask from './components/NewTask/NewTask'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      input: '',
      counter: 0
      }
      this.handleAddTask = this.handleAddTask.bind(this)
      this.addTask = this.addTask.bind(this)
      this.deleteTask = this.deleteTask.bind(this)
      this.taskComplete = this.taskComplete.bind(this)
    }


    componentDidMount() {
      axios.get(`/api/task`).then( results => {
        this.setState({ list: results.data });
      });
    }
  


    handleAddTask(){
      this.setState({
        list: [ ...this.state.list, this.state.input],
        input: ''
      })
    }

    handleInput(text){
      this.setState({input:text})
    }

    getAllTasks(){
      return this.state.list.map()
    }

    taskComplete(id, item){
      axios.put(`/api/task/`,{
        id: id,
        item: item
      }).then(response => {
        this.setState({
          list: response.data,
          counter: ++this.state.counter
        })
      })
    }

    addTask(){
     axios.post('/api/task', {task: this.state.input} ).then (response => {
       this.setState({
         input: '',
         list: response.data
       })
     }) 
    }

    deleteTask(id){
     axios.delete(`api/task/${id}`).then(response => {
       this.setState({
         list: response.data
       })
     }) 
    }


  
  render() {
    let list = this.state.list.map( ( element, index ) => {
      return (
        <NewTask completeButton={<CompletedButton id={element.id} taskComplete={this.taskComplete} />} delete={this.deleteTask} key={ index } task={ element }  /> )
        
      })
      
    return (
      <div className='App'>
        <Header />
       
        <div className="listBorder">
        <input value={this.state.input}
        placeholder='what needs to be done?'
        onChange={ (event) => this.handleInput( event.target.value )}/>
        <button onClick={this.addTask}>Add</button>
        <TasksComplete total={this.state.counter} />
        {list}
      
        
        </div>
      </div>

      );
    }
  }
  
    
    export default App;
    