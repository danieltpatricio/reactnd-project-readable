import React,{ Component, Fragment} from 'react'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import './App.css'
import HomePage from './HomePage/HomePage'
import FloatButton from './FloatButton/FloatButton'
import TopBar from './TopBar/TopBar'
import NewPost from './NewPost/NewPost'
import ListPosts from './ListPosts/ListPosts'
import PostPage from './PostPage/PostPage'

import LoadingBar from 'react-redux-loading'
import { BrowserRouter,Route, Switch } from 'react-router-dom'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return(
    <div className="App">
    <BrowserRouter>
      <Fragment>
        <LoadingBar Style={{ backgroundColor: 'blue'}}/>
        <div className="content">
          <div className="categories-grid">
            {this.props.loading === true
              ? null
              : <div>
                  <TopBar/>
                  <div Style="margin-left: 250px;margin-right: 250px;">
                    <Route path="/" exact component={HomePage}/>
                    <Switch>
                      <Route path="/new" exact component={NewPost}/>
                      <Route path="/:category/" exact component={ListPosts}/>
                    </Switch>
                    <Route path="/:category/:id" exact component={PostPage}/>
                  </div>
                  <FloatButton />
                </div>
            }
          </div>
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
  
export default connect(mapStateToProps)(App)
