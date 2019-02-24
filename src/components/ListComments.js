import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import FilterList from './FilterList';

class ListComments extends Component{
	state = {
		value: 0
	}

	handleChange = ( _event,value ) => {
		this.setState({value})
	}

	sortList = () =>{
		switch (this.state.value){
			case 0 :
				return this.props.comments.sort((a,b)=> b.timestamp - a.timestamp)
			case 1:
				return this.props.comments.sort((a,b)=> b.voteScore - a.voteScore)
			default:
				return this.props.comments.sort((a,b)=> b.timestamp - a.timestamp)
		} 
		
	}

  	render(){
		var { comments } = this.props;
		return comments.length !== 0 &&(
	  		<div className="margin-top">
				<FilterList value={this.state.value} handleChange={this.handleChange}/>
				{this.sortList(comments).map(c =>{
						return <Comment item={c} key={c.id}/>
					})
				}
			</div>
		)
  	}
}

function mapStateToProps({comments},props) {
	comments = Object.values(comments).filter(f => f.parentId === props.id)

	return { comments }
}
  
export default connect(mapStateToProps) (ListComments)

