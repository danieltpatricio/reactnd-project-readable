import React from 'react';
import {Fab, Tooltip} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom';

export default function FloatButton(props){
    return(
        <div className="float-btn">
            <NavLink to="/new">
                <Tooltip title="Add Post" aria-label="Add Post">
                    <Fab color="primary" aria-label="Add" >
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </NavLink>
        </div>       
    )
}