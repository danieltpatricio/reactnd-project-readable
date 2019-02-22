import React from 'react'
import ReactDOM from 'react-dom'
import Comment from '../components/Comment'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  reducer  from '../reducers'
import middlaware from '../middleware'

const store = createStore(reducer,middlaware) 

const item = {
  "id": "894tuq4ut84ut8v4t8wun89g",
  "parentId": "8xf0y6ziyjabvozdd253nd",
  "timestamp": 1468166872634,
  "body": "Hi there! I am a COMMENT.",
  "author": "thingtwo",
  "voteScore": 6,
  "deleted": false,
  "parentDeleted": false
}


it('renders Comment without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
        <Comment item/>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
});
