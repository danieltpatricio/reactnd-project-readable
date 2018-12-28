import React, { Component } from 'react'
import { connect } from 'react-redux'



class ListComments extends Component{
  	render(){
		return(
	  		<div>
				<h2>teste</h2>
			</div>
		)
  	}
}
function mapStateToProps({ posts }) {
	return posts
}

  
export default connect(mapStateToProps) (ListComments)

