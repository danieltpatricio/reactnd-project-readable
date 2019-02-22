import React from 'react'
import ReactDOM from 'react-dom'
import EditAlert from '../components/EditAlert'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  reducer  from '../reducers'
import middlaware from '../middleware'

const store = createStore(reducer,middlaware) 
const item = {
  title: "Teste",
  body: "Testes",
  type: "Comment",
  
};

it('renders EditAlert without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
        <EditAlert item/>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
});
