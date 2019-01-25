import React from 'react'
import GridListCategories from '../GridListCategories/GridListCategories'
import ListPosts from '../ListPosts/ListPosts'

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

