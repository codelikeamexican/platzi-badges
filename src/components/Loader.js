import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'


function Loader(){
    return(
        <div>
        <ProgressBar striped variant="success" now={35} key={1} />
        </div>
    );

}
export default Loader;