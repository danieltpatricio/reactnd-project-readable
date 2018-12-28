import React from 'react'
import udacity from '../assets/udacity.png'
import redux from '../assets/redux.png'
import react from '../assets/react.png'


export const formatDate = (timestamp) =>{
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return d.toLocaleDateString() + ' às ' + time.substr(0, 5) + time.slice(-2)
}

export const formatObject = (obj)=>{
  obj = obj 
  ? obj.reduce((obj,item)=> {
    obj[item.id]=item
    return obj
  },{})
  : {}
  return obj
}

export const getIcons = (category) =>{
  switch (category){
    case 'react':
        return <img alt={category} className='categories-list-icons' src={react}/>
    case 'redux':
        return <img alt={category} className='categories-list-icons' src={redux}/>
    case 'udacity':
        return <img alt={category} className='categories-list-icons' src={udacity}/>
    default:
        return <h2>(Sem Imagem)</h2>
  }
}

export const generateUID = () =>{
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}