import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List,Tabs,Tab } from '@material-ui/core/';
import { handleTogglePost } from '../actions/posts'

import Post  from './Post';

class ListAllPosts extends Component{
	state = {
		value: 0
  	}
	
	handleLike = (e,id,hasLiked) =>{
		e.preventDefault()


		const { dispatch, authedUser } = this.props
		dispatch(handleTogglePost({
			id: id,
			hasLiked: hasLiked,
			authedUser
		}))
	}
	  
	handleChange = ( _event,value ) => {
		this.setState({value})
	}

	sortList = (posts) =>{
		switch (this.state.value){
			case 0 :
				return posts.sort((a,b)=> b.timestamp - a.timestamp);
			case 1:
				return posts.sort((a,b)=> b.commentCount - a.commentCount)
			default:
				return posts.sort((a,b)=> b.timestamp - a.timestamp);
		} 
		
	}
	  
  	render(){
		let { value } = this.state;
		let  posts  =  this.sortList(Object.values(this.props.posts));
		return(
	  		<div>
				<Tabs 
				indicatorColor="primary" 
				value={value} 
				onChange={this.handleChange} 
				scrollable 
				scrollButtons="off"
				>
					<Tab icon={<i className="far fa-calendar-alt fa-2x "></i>} />
					<Tab icon={<i className="far fa-thumbs-up fa-2x"></i>} />
				</Tabs>
				<List className="list-posts">
		  		{ 
					posts.map(item => (
						<Post item={item} setstate={this.setStatePosts} handleLike={(e,hasLiked)=>this.handleLike(e,item.id,hasLiked)} key={item.id}/>
					))
		  		}
				</List>
			</div>
		)
  	}
}

function mapStateToProps ( posts, authedUser ) {
  return  posts
}
  
export default connect(mapStateToProps)(ListAllPosts)

