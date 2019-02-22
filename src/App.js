import React,{ Component, Fragment} from 'react'

import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'

import './App.css'
import HomePage from './components/HomePage'
import FloatButton from './components/FloatButton'
import TopBar from './components/TopBar'
import NewPost from './components/NewPost'
import ListPosts from './components/ListPosts'
import PostPage from './components/PostPage'
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';

import LoadingBar from 'react-redux-loading';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return(
    <div className="App">
    <BrowserRouter>
      <Fragment>
        <LoadingBar /> {/*Style={{ backgroundColor: 'blue'}}/> */}
        <div className="categories-grid">
          {this.props.loading === true
            ? null
            : <div>
                <TopBar/>
                <main className="content">
                  <Route path="/" exact component={HomePage}/>
                  <Switch>
                    <Route path="/new" exact component={NewPost}/>
                    <Route path="/search(term)" exact component={NewPost}/>
                    <Route path="/:category/" exact component={ListPosts}/>
                  </Switch>
                  <Route path="/:category/:id" exact component={PostPage}/>
                </main>
                <FloatButton />
              </div>
          }
        </div>
      </Fragment>
    </BrowserRouter>
    </div>
  )}
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
  
export default 
compose(
	connect(mapStateToProps),
	withStyles(styles, { withTheme: true }),
)(App)
