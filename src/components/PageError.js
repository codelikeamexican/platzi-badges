import React from 'react';
import './styles/PageError.css';
import astrounauts from '../images/astronauts.svg';
function PageError(props){
    return( 
    <div className="PageError">
    
        <img
        src= {astrounauts}
        />
        {props.error.message}
    </div>
    );
}
export default PageError;