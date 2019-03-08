import React from 'react';
import erro404 from '../assets/404.png';


export default function Page404(){
    return(
        <div className="center">
            <img src={erro404} alt="Erro 404 not found"/>
            <h2>Oops... Page not found,</h2>
            <h2>This post may have been deleted or does not exist.</h2>
        </div>
    )
}