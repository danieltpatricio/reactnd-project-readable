import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { Home, ExpandLess, ExpandMore, ViewList} from '@material-ui/icons'
import { NavLink } from 'react-router-dom';
import {
  Typography,
	ListItemIcon,
	ListItemText,
  Collapse,
} from '@material-ui/core/';
import { getIcons } from '../utils/FormatItems';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class MenuBar extends React.Component {
  state = {
    openCategories: false,
  }

  handleCategories = (e)=>{
    this.setState({openCategories: !this.state.openCategories})
  }

  render() {
    const { classes, theme, open,handleDrawer,categories } = this.props;
    var { openCategories } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <NavLink to='/' className={classNames(classes.menuButton, {
                  [classes.hide]: !open,
              })}>
                  <Typography variant="h6" noWrap>
                  Readable
                  </Typography>
            </NavLink>
            <IconButton onClick={handleDrawer}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <NavLink to="/">
              <ListItem key="home" className={classes.menuItem} button open>
                <ListItemIcon className={classes.icon}>
                  <Home />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
              </ListItem>
            </NavLink>
            <ListItem button onClick={this.handleCategories}>
                <ListItemIcon className={classes.icon}>
                  <ViewList/>
                </ListItemIcon>
                <ListItemText inset primary="Categories" />
                {openCategories ? <ExpandLess /> : <ExpandMore />}
            </ListItem> 
            <Collapse in={openCategories} timeout="auto" unmountOnExit>
              {
                categories.map(category =>(
                  <NavLink key={category.name} onClick={this.handleMenu} to={`/${category.path}`}>
                    <ListItem className={classes.menuItem} button open>
                      <ListItemIcon className={classes.icon}>
                        {getIcons(category.name)}
                      </ListItemIcon>
                      <ListItemText classes={{ primary: classes.primary }} primary={category.name.charAt(0).toUpperCase() + category.name.slice(1)} />
                    </ListItem>
                  </NavLink>
                ))
              }
            </Collapse>
            <Divider />
          </List>
        </Drawer>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProps ({categories},props) {
	categories = Object.values(categories)
    return  { categories }
}

export default compose(
	connect(mapStateToProps),
	withStyles(styles, { withTheme: true }),
)(MenuBar);
