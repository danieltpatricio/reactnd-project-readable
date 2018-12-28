import React,{ Component, Fragment} from 'react'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import './App.css'
import Main from './Main'
import FloatButton from './FloatButton'
import TopBar from './TopBar'
import NewPost from './NewPost'
import ListPosts from './ListPosts'
import PostPage from './PostPage'

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
        <LoadingBar/>
        <TopBar title='Readable' />
        <div className='categories-grid'>
          {this.props.loading === true
            ? null
            : <div>
                <Route path='/' exact component={Main}/>
                <Switch>
                  <Route path='/new' exact component={NewPost}/>
                  <Route path='/:category/' exact component={ListPosts}/>
                </Switch>
                <Route path='/:category/:id' exact component={PostPage}/>
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
  
export default connect(mapStateToProps)(App)
