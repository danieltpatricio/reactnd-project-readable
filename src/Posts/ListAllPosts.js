import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { List,ListItem,ListItemText,Tabs,Tab } from '@material-ui/core/';

import * as PostsApi from '../config/PostsApi'

export default class ListAllPosts extends Component {
    state = {
        value: 0,
    }

    componentWillMount(){
        // PostsApi.getAllPosts().then((posts) => this.setState({posts: post}))
    }

    handleChange = (event, value) => {
        this.setState({ value });
    }

    render(){
        const { value,posts } = this.state;
        return(
            <div>
                <Tabs 
                    indicatorColor="primary" 
                    value={value} 
                    onChange={this.handleChange} 
                    scrollable 
                    scrollButtons="off"
                >
                    <Tab  icon={<i className="far fa-calendar-alt fa-2x "></i>} />
                    <Tab  icon={<i className="far fa-thumbs-up fa-2x"></i>} />
                </Tabs>
                {/* <List>
                    {posts.map(item=>(
                        <ListItem button>
                            <ListItemText primary='test'/>
                        </ListItem>      
                    ))
                    }
                </List> */}
            </div>
        )
    }
}