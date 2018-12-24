import React,{ Component, Fragment} from 'react'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import './App.css'
import Main from './Main'
import FloatButton from './FloatButton'
import TopBar from './TopBar'
import NewPost from './NewPost'
import ListCategoryPosts from './ListCategoryPosts'


import LoadingBar from 'react-redux-loading'
import { BrowserRouter,Route } from 'react-router-dom'


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
                {/* <Route path='/:category/' exact component={ListCategoryPosts}/> */}
                <Route path='/new' exact component={NewPost}/>
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
