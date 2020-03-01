import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const MiddleHeading = () => {
     return (
         <div id="middle_heading">  
            <Link to="/any-url">
              <FontAwesomeIcon icon={faRandom} size="2x"/>          
            </Link> 
         </div>
     );
 };

 export default MiddleHeading;