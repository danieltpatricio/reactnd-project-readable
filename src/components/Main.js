import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import GridListCategories from './GridListCategories'
import ListAllPosts from './ListAllPosts'
import TopBar from './TopBar';

class Main extends Component{ 
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    render(){
        return(
            <div>
                <TopBar title='Readable' />
                <div className='categories-grid'> 
                    <div>
                        <h2>Categories:</h2>
                    </div>  
                    <GridListCategories/>
                    <div>
                        <h2>Posts:</h2>
                    </div> 
                    <ListAllPosts/>
                </div> 
            </div>
               
        )
    }
}

export default connect()(Main)