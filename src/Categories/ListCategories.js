import React from 'react';
import PropTypes from 'prop-types';
import { List,ListItem,ListItemIcon,ListItemText } from '@material-ui/core/';
import udacity from '../assets/udacity.png';
import redux from '../assets/redux.png';
import react from '../assets/react.png';

export default function ListCategories (props){
    let {categories} = props;

    let setIcons =(category)=>{
        switch (category){
            case 'react':
                return <img alt={category} className='categories-list-icons' src={react}/>
            case 'redux':
                return <img alt={category} className='categories-list-icons' src={redux}/>
            case 'udacity':
                return <img alt={category} className='categories-list-icons' src={udacity}/>
            default:
                return  <h2>Sem Imagem</h2>
        }
    }

    if(categories !== [] && categories.length > 0 ){
        return(
            <div>
                <List>
                    {
                        categories.map(category =>(
                            <ListItem key={category.name} >
                                <ListItemIcon>
                                    {setIcons(category.name)}
                                </ListItemIcon>
                                <ListItemText primary={category.name} />
                            </ListItem>
                        )) 
                    }
                </List>
            </div> 
        )  
    }else{
        return <h2>nenhuma rola aqui</h2>
    }
}

ListCategories.propTypes = {
    categories: PropTypes.Array,
};

