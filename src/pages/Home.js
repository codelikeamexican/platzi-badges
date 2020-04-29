import React from 'react';
import './styles/Home.css';
import {Link} from 'react-router-dom';
import confLogo from '../images/platziconf-logo.svg';
import astrounauts from '../images/astronauts.svg';


class Home extends React.Component{
  render(){
    return(
      <div className="Home">
        <div className="container">
        <div className="row">
         <div className="Home__col col-12 col-md-4">
              <img src={confLogo}  />
             <h1> Platzi Badges</h1>
              <h5 className="font-weight-light"> La conferencia anual de platzi </h5>
              <Link className="btn btn-primary"
              to="/badges"> 
              Get Start
              </Link>
          </div>
        <div className="Home__col col-md-8">
        <img src={astrounauts}/>
        </div>
        </div>
      </div>
    </div>     
    );
  }
}
export default Home;