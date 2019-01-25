import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Tabs, Tab } from '@material-ui/core/'
import Post  from '../Post/Post'


class ListPosts extends Component{
	state = {
		value: 0
  	}
 
	handleChange = ( _event,value ) => {
		this.setState({value})
	}

	sortList = (posts) =>{
		switch (this.state.value){
			case 0 :
				return posts.sort((a,b)=> b.timestamp - a.timestamp)
			case 1:
				return posts.sort((a,b)=> b.voteScore - a.voteScore)
			default:
				return posts.sort((a,b)=> b.timestamp - a.timestamp)
		} 
		
	}
	  
  	render(){
		let { value } = this.state
		let  posts  =  this.sortList(this.props.posts)
		return(
	  		<div className="grid-posts">
				<Tabs 
				indicatorColor="primary" 
				value={value} 
				onChange={this.handleChange} 
				variant="scrollable"
				scrollButtons="off"
				>
					<Tab icon={<i className="far fa-calendar-alt fa-2x "></i>} />
					<Tab icon={<i className="far fa-thumbs-up fa-2x"></i>} />
				</Tabs>
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
		posts
	}
}
  
export default connect(mapStateToProps)(ListPosts)

