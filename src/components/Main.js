import React, { Component } from 'react'
import { connect } from 'react-redux'

import GridListCategories from './GridListCategories'
import ListPosts from './ListPosts'

class Main extends Component{ 
    render(){
        return(
            <div>
                <div>   
                    <GridListCategories/> 
                    <ListPosts/>
                </div> 
            </div>   
        )
    }
}

export default connect()(Main)
