import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  reducer  from '../reducers'
import middlaware from '../middleware'

const store = createStore(reducer,middlaware) 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
});
