import React, { Component } from 'react';
import { Tabs, Tab } from '@material-ui/core/';

class FilterList extends Component{
  	render(){
		const { handleChange,value } = this.props 
		return (
	  		<div className="margin-top">
				<Tabs 
				indicatorColor="primary" 
				value={value} 
				onChange={handleChange} 
				variant="scrollable"
				scrollButtons="off"
				>
					<Tab icon={<i className="far fa-calendar-alt fa-2x "></i>} />
					<Tab icon={<i className="far fa-thumbs-up fa-2x"></i>} />
				</Tabs>
			</div>
		)
  	}
}

export default FilterList;

