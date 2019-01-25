import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Hidden,
    InputBase,
} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MenuBar from '../MenuBar/MenuBar'


class  TopBar extends Component {
    state = {
        open: true,
        openCategories: false,
    }

    handleMenu = (e)=>{
        this.setState((c)=>{
            c.open=!c.open
            return c
        })
    }

    handleCategories = (e)=>{
        this.setState((c)=>{
            c.openCategories = !c.openCategories
            return c
        })
    }

    render(){
        let { open } = this.state
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={this.handleMenu} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <NavLink to='/' className="title">
                            <Typography variant="h6" color="inherit" noWrap>
                            Readable 
                            </Typography>
                        </NavLink>
                        <Hidden smDown>
                            <div className='search'>
                                <SearchIcon className='search-icon'/>
                                <InputBase
                                    placeholder="Search…"
                                />
                            </div>
                        </Hidden>
                    </Toolbar>
                </AppBar>
                <MenuBar open={open} />

            </div>
            
        )
    }
    
}
export default (TopBar)