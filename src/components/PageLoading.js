import React from 'react';
import './styles/PageLoading.css';
import BarLoader from "react-spinners/ClipLoader";

function Pageloading(){
   
    return(
        <div className="PageLoading">
            <BarLoader
                size={150}
                color={"#7DCD40"}
                loading = {true}
        />
        </div>
    );
}
export default Pageloading;