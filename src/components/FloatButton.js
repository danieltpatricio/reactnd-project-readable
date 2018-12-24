import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { NavLink } from 'react-router-dom'

export default function FloatButton(props){
    return(
        <div className="float-btn">
            <NavLink to="/new">
                <Fab color="primary" aria-label="Add" >
                    <AddIcon />
                </Fab>
            </NavLink>
        </div>       
    )
}