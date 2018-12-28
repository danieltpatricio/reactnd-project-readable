import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { AppBar,Toolbar,IconButton,Typography,Drawer,ListItem,ListItemIcon,List,ListItemText } from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Home from '@material-ui/icons/Home'
import { getIcons } from '../utils/FormatItems'


class  TopBar extends Component {
    state = {
        open: false,
    }

    toggleDrawer = (open) => () => {
        this.setState({
          open: open,
        })
    }

    setIcons = (category)=>{
       
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
                                    <ListItem key={category.name} button>
                                        <ListItemIcon>
                                            {getIcons(category.name)}
                                        </ListItemIcon>
                                        <ListItemText primary={category.name} />
                                    </ListItem>
                                )) 
                            }
                            <NavLink to="/">
                                <ListItem key="home" button>
                                    <ListItemIcon>
                                        <Home />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItem>
                            </NavLink>
                        </List>
                    </div>  
                </Drawer>
                <div>
                    <AppBar position="static">
                        <Toolbar className='menu'>
                            <IconButton color="inherit" aria-label="Open drawer">
                                <MenuIcon onClick={this.toggleDrawer(true)}/>
                            </IconButton>
                            <NavLink to='/' >
                                <Typography variant="h6" color="inherit" noWrap>
                                {title}
                                </Typography>
                            </NavLink>
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
            
        )
    }
    
}
function mapStateToProps ( categories ) {
    return  categories
  }
    
  export default connect(mapStateToProps)(TopBar)