import React from 'react'
import ReactDOM from 'react-dom'
import DeleteAlert from '../components/DeleteAlert'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  reducer  from '../reducers'
import middlaware from '../middleware'

const store = createStore(reducer,middlaware) 


const id = "894tuq4ut84ut8v4t8wun89g";
const type = 'Comment';

it('renders DeleteAlert ,without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
        <DeleteAlert id={id} type={type}/>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
});
