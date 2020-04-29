import React from 'react';
import { render } from 'react-dom';
import './styles/NotFound.css';

import {Link} from 'react-router-dom';
function NotFound() {
 
    return(
      <div className="NotFound">
        <div className="container">

          <div className="row">
            <div className="NotFound__col col-4">
              <h1>Error : 404</h1>
              <h3> Página no encontrada</h3>
              <Link className="btn btn-primary" 
              to="/"
              > 
              Regresar al inicio
              </Link>
            </div>

            <div className="NotFound__col col-8">

            </div>
          </div>

        </div>
      </div>

    );
  
}

export default NotFound;
