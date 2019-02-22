import { createStore } from 'redux';
import  reducer  from '../reducers';
import middlaware from '../middleware';

export const store = createStore(reducer,middlaware) 
