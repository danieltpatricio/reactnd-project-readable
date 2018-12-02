import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Main from './Main';


function App (){
  return(
    <div className="App">
      <Route path='/' component={Main}/>
    </div>
  )
}
  
export default App