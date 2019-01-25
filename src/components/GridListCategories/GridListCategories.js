import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { 
    Fab,  
} from '@material-ui/core/'
import react from '../assets/react.png'
import udacity from '../assets/udacity.png'
import redux from '../assets/redux.png'


function GridListCategories (props){
    let categories = props.categories
    let setImages =(category)=>{
        switch (category){
            case 'react':
                return react
            case 'redux':
                return redux
            case 'udacity':
                return udacity
            default:
                return "http://energiaautomacao.com.br/wp-content/uploads/2018/04/sem-imagem-7.jpg"
        }
    }
    return(
        <div className="categories">
            {
                categories.map(category => (
                    <NavLink to={category.path} className="category" key={category.path}>
                        <Fab
                        variant="extended"
                        size="medium"
                        aria-label={category.name}
                        className="category"
                        >
                        <img 
                            src={ setImages(category.name) } 
                            alt={category.name} 
                            className="categories-list-icons"
                        /> 
                        {category.name}
                        </Fab>
                    </NavLink>
                ))
            }
        </div>
    )  
}

function mapStateToProps ({ categories }) {
    categories = Object.values(categories)
    return {
        categories
    }
}
export default connect(mapStateToProps) (GridListCategories)
    
