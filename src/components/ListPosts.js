import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '@material-ui/core/';
import Post  from './Post';
import FilterList from './FilterList';
import { getIcons } from '../utils/FormatItems';



class ListPosts extends Component{
	state = {
		value: 0
  	}
 
	handleChange = ( _event,value ) => {
		this.setState({value})
	}

	sortList = () =>{
		switch (this.state.value){
			case 0 :
				return this.props.posts.sort((a,b)=> b.timestamp - a.timestamp)
			case 1:
				return this.props.posts.sort((a,b)=> b.voteScore - a.voteScore)
			default:
				return this.props.posts.sort((a,b)=> b.timestamp - a.timestamp)
		} 
		
	}
	  
  	render(){
		let { value } = this.state
		let  posts  =  this.sortList()
		return posts.length === 0
		?  <h2>This category has no post yet,Click to add new post!<span role="img" aria-label="sorry">😬</span></h2>
		:(
	  		<div className="grid-posts">
			  	{ this.props.match &&  (<h2> {getIcons(posts[0].category) } { posts[0].category.charAt(0).toUpperCase() + posts[0].category.slice(1)}:</h2>)}
				<FilterList value={value} handleChange={this.handleChange}/>	
				<List className="list-posts">
		  		{ 
					posts.map(item => (
						<Post item={item} key={item.id}/>
					))
		  		}
				</List>
			</div>
		)
  	}
}

function mapStateToProps ( { posts },props ) {
	posts = Object.values(posts)
	
	if (props.match) (posts = posts.filter((post)=>props.match.params.category === post.category) )
	return {
		posts,
	}
}
  
export default connect(mapStateToProps)(ListPosts)

