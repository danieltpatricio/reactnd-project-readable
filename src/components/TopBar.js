import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppBar,Toolbar,IconButton,Typography,Drawer,ListItem,ListItemIcon,List,ListItemText } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import udacity from '../assets/udacity.png';
import redux from '../assets/redux.png';
import react from '../assets/react.png';


  
class  TopBar extends Component {
    state = {
        open: false,
    }

    toggleDrawer = (open) => () => {
        this.setState({
          open: open,
        });
    };

    setIcons = (category)=>{
        switch (category){
            case 'react':
                return <img alt={category} className='categories-list-icons' src={react}/>
            case 'redux':
                return <img alt={category} className='categories-list-icons' src={redux}/>
            case 'udacity':
                return <img alt={category} className='categories-list-icons' src={udacity}/>
            default:
                return <h2>Sem Imagem</h2>
        }
    }

    render(){
        let categories  =  Object.values(this.props.categories)
        let {title} = this.props

        return (
            <div>
                <Drawer open={this.state.open} onClose={this.toggleDrawer(false)} >
                    <div className='menu'>
                        <List>
                            {
                                categories.map(category =>(
                                    <ListItem key={category.name} >
                                        <ListItemIcon>
                                            {this.setIcons(category.name)}
                                        </ListItemIcon>
                                        <ListItemText primary={category.name} />
                                    </ListItem>
                                )) 
                            }
                        </List>
                    </div>  
                </Drawer>
                <div>
                    <AppBar position="static">
                        <Toolbar className='menu'>
                            <IconButton color="inherit" aria-label="Open drawer">
                                <MenuIcon onClick={this.toggleDrawer(true)}/>
                            </IconButton>
                            <Typography variant="h6" color="inherit" noWrap>
                            {title}
                            </Typography>
                            <div className='search'>
                                <SearchIcon className='search-icon'/>
                                <InputBase
                                    placeholder="Search…"
                                />
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
            
        );
    }
    
}
function mapStateToProps ( categories ) {
    return  categories
  }
    
  export default connect(mapStateToProps)(TopBar)