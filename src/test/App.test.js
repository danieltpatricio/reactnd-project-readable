import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { Provider } from 'react-redux';
import store from './__helper.test';


it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
