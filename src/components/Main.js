import React, { Component } from 'react'
import { connect } from 'react-redux'

import GridListCategories from './GridListCategories'
import ListAllPosts from './ListAllPosts'

class Main extends Component{ 
    render(){
        return(
            <div>
                <div> 
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
