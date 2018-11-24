import React, { Component } from 'react';
import { AppBar,Toolbar,IconButton,Typography,Drawer } from '@material-ui/core/';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import * as CategoriesApi from '../config/CategoriesApi';
import ListCategories from '../Categories/ListCategories';
import InputBase from '@material-ui/core/InputBase';


  
export default class  TopBar extends Component {
    state = {
        open: false,
        categories:[]

    }
    componentDidMount = () =>{
        CategoriesApi.getAllCategories().then((categories)=> this.setState({categories : categories}));
    }

    toggleDrawer = (open) => () => {
        this.setState({
          open: open,
        });
      };

    render(){
        const { categories } = this.state

        return (
            <div>
                <Drawer open={this.state.open} onClose={this.toggleDrawer(false)} >
                    <div className='menu'>
                        <ListCategories  categories={categories} ></ListCategories>
                    </div>  
                </Drawer>
                <div>
                    <AppBar position="static">
                        <Toolbar className='menu'>
                            <IconButton color="inherit" aria-label="Open drawer">
                                <MenuIcon onClick={this.toggleDrawer(true)}/>
                            </IconButton>
                            <Typography variant="h6" color="inherit" noWrap>
                            Readable
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
  