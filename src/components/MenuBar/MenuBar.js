import React, { Component } from 'react'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import {
	Grow,
	Paper,
	Popper,
	MenuItem,
	ListItemIcon,
	ListItemText,
	MenuList,
    Collapse,
} from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send'
import { Home, ExpandLess, ExpandMore, ViewList} from '@material-ui/icons'
import { NavLink } from 'react-router-dom'
import { getIcons } from '../../utils/FormatItems'


const styles = theme => ({
	root: {
	display: 'flex',
	},
	paper: {
	marginRight: theme.spacing.unit * 2,
	},
	menuItem: {
	'&:focus': {
		backgroundColor: theme.palette.primary.main,
		'& $primary, & $icon': {
		color: theme.palette.common.white,
		},
	},
	},
	primary: {},
	icon: {},
})

class MenuBar extends Component {
	state = {
        openCategories: this.props.match &&  this.props.match.params.category ? true : false,
	}
	
	handleCategories = (e)=>{
        this.setState((c)=>{
            c.openCategories = !c.openCategories
            return c
        })
	}

	render(){
		var { openCategories } = this.state
	// if (props.match) (posts = posts.filter((post)=>props.match.params.category === post.category)
		const { classes, open , categories, match } = this.props
		return (
			<div>
			<h2>{match}</h2>
				<Popper open={open}  transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
					{...TransitionProps}
					id="menu-list-grow"
					>
						<Paper>
							<MenuList>
								<NavLink to="/">
									<MenuItem key="home" className={classes.menuItem} button open>
										<ListItemIcon className={classes.icon}>
											<Home />
										</ListItemIcon>
										<ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
									</MenuItem>
								</NavLink>

								<MenuItem button onClick={this.handleCategories}>
									<ListItemIcon className={classes.icon}>
										<ViewList/>
									</ListItemIcon>
									<ListItemText inset primary="Categories" />
									{openCategories ? <ExpandLess /> : <ExpandMore />}
								</MenuItem>

								
								<Collapse in={openCategories} timeout="auto" unmountOnExit>
									<MenuList component="div" disablePadding>
									{
										categories.map(category =>(
											<NavLink key={category.name} onClick={this.handleMenu} to={category.path || '/' }>
												<MenuItem button>
													<ListItemIcon>
														{getIcons(category.name)}
													</ListItemIcon>
													<ListItemText primary={category.name} />
												</MenuItem>
											</NavLink>
										))
									}
									</MenuList>
								</Collapse>

								<MenuItem className={classes.menuItem}>
									<ListItemIcon className={classes.icon}>
									<SendIcon />
									</ListItemIcon>
									<ListItemText classes={{ primary: classes.primary }} inset primary="Sent mail" />
								</MenuItem>
							</MenuList>
						</Paper>
					</Grow>
				)}
				</Popper>
			</div>
		)
	}
}

function mapStateToProps ({categories},props) {
	categories = Object.values(categories)
	console.log(props)
    return  { categories }
}

export default compose(
	connect(mapStateToProps),
	withStyles(styles),
)(MenuBar)
