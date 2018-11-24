import React, { Component } from 'react';
import * as CategoriesApi from '../config/CategoriesApi';

import GridListCategories from '../Categories/GridListCategories';
import ListAllPosts from '../Posts/ListAllPosts';

export default class Main extends Component{
    state = {
        categories: []
    }
    
    componentDidMount = () =>{
        CategoriesApi.getAllCategories().then((categories)=> this.setState({categories : categories}));
    }

    render(){
        let {categories} = this.state
        return(
            <div className='categories-grid'>
                <div>
                    <h2>Categories:</h2>
                </div>  
                <GridListCategories categories={categories}></GridListCategories>
                <div>
                    <h2>Posts:</h2>
                </div> 
                {/* <ListAllPosts></ListAllPosts> */}
            </div>    
        )
    }
}