import React from 'react';
import moment from 'moment';
import './NewTask.css'

export default function NewTask (props) {
  return (
   <p> { moment(props.task.date).format('LLL ') } 
   <br/> 
   {' Task: ' + props.task.item } 
   <br/>
   {props.completeButton}
   <button className="deleteButton" 
   onClick={()=> props.delete(props.task.id)}>Delete</button> 
   </p>
     
  )
}