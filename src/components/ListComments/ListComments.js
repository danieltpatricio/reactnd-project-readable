import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../Comment/Comment'
import { List, Tabs, Tab} from '@material-ui/core/'

class ListComments extends Component{
	state = {
		value: 0
  	}
 
	handleChange = ( _event,value ) => {
		this.setState({value})
	}

	sortList = (comments) =>{
		switch (this.state.value){
			case 0 :
				return comments.sort((a,b)=> b.timestamp - a.timestamp)
			case 1:
				return comments.sort((a,b)=> b.voteScore - a.voteScore)
			default:
				return comments.sort((a,b)=> b.timestamp - a.timestamp)
		} 
		
	}

  	render(){
		let { comments } = this.props
		const { value } = this.state
		return comments.length > 0 ?(
	  		<div >
				<h2>Comments {'(' + comments.length + ')'}</h2>
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
					this.sortList(comments).map((item)=>
						<Comment item={item} key={item.id}/>
					)
				}
				</List>
			</div>
		)
		: <div></div>
  	}
}
function mapStateToProps({ comments },props) {
	const { id } = props
	comments = Object.values(comments).filter((comment) => comment.parentId === id)
	return {
		comments
	}
}

  
export default connect(mapStateToProps) (ListComments)

