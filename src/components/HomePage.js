import React from 'react'
import GridListCategories from './GridListCategories'
import ListPosts from './ListPosts'

export default function HomePage (){ 
    return(
        <div>
            <div>   
                <GridListCategories/>  
                <ListPosts/>
            </div> 
        </div>   
    )
    
}

