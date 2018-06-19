import React, {Component} from 'react'
import axios from 'axios'
import  './Header.css'



class Header extends Component {
    constructor(){
        super()
        this.state = {
            quote: ''
        }
    }
    componentDidMount(){
        axios.get('https://talaikis.com/api/quotes/random/').then(response => {
            this.setState({
                quote: response.data.quote
            })
        })
    }
    
    render(){


    return (
        <div className="listHeader">
            <h1>Task List</h1>
            <h2>Quote of the day </h2> 
            <p> "{this.state.quote}"</p>
        </div>
        )   
    }
}

export default Header