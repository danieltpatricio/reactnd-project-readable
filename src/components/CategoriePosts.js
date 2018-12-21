import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import TopBar from './TopBar';

class Main extends Component{ 
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    render(){
        return(
            <div>
                <TopBar title="<img alt={category} className='categories-list-icons' src={react}/> React"/>
            </div>
               
        )
    }
}

export default connect()(Main)