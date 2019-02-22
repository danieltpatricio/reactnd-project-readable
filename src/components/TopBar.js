import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	CssBaseline,
} from '@material-ui/core/';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBar from './MenuBar';
import { NavLink } from 'react-router-dom';
import ChangeUser from './ChangeUser';


const drawerWidth = 240;

const styles = theme => ({
	root: {
	display: 'flex',
	},
	appBar: {
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	},
	appBarShift: {
	marginLeft: drawerWidth,
	width: `calc(100% - ${drawerWidth}px)`,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	},
	menuButton: {
	marginLeft: 12,
	marginRight: 36,
	},
	hide: {
	display: 'none',
	},
});

class TopBar extends React.Component {
	state = {
	open: false,
	};

	handleDrawer = () => {
	this.setState({ open: !this.state.open });
	};


	render() {
	const { classes } = this.props;

	return (
		<div className={classes.root}>
		<CssBaseline />
		<AppBar
			position="fixed"
			className={classNames(classes.appBar, {
			[classes.appBarShift]: this.state.open,
			})}
		>
			<Toolbar disableGutters={!this.state.open}>
			<IconButton
				color="inherit"
				aria-label="Open drawer"
				onClick={this.handleDrawer}
				className={classNames(classes.menuButton, {
				[classes.hide]: this.state.open,
				})}
			>
				<MenuIcon />
			</IconButton>
			<NavLink to='/' className={classNames(classes.menuButton, {
				[classes.hide]: this.state.open,
			})}>
				<Typography variant="h6" color="inherit" noWrap>
					Readable
				</Typography>
			</NavLink>
			<div className="user-btn">
				<ChangeUser/>
			</div>
			</Toolbar>
		</AppBar>
		<MenuBar handleDrawer={this.handleDrawer} open={this.state.open}/>
		</div>
	);
	}
}

TopBar.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TopBar);