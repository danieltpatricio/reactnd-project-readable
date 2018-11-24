import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Main from './Main/Main';
import TopBar from './TopBar/TopBar';


export default function  App () {
  return(
    <div className="App">
      <TopBar></TopBar>
      <Route exact path="/" component={Main}/> 
      
    </div>
  )
};
  


