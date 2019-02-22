import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Fab } from '@material-ui/core/';
import { getIcons } from '../utils/FormatItems';

function GridListCategories (props){
    let categories = props.categories

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
                        color="primary"
                        >
                        {getIcons(category.name)}
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
    
