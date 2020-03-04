import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './styles.css';

function DevItem({ dev, removeDev, handleUpdateDev }) {
  
  async function remDev(e) {
    e.preventDefault();
    await removeDev(dev);
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <div className="app-states">
        <footer>
          <div><a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" color="blue" /></a></div>
          <div><FontAwesomeIcon icon={faEdit} size="2x" color="green" /></div>
          <div><FontAwesomeIcon icon={faMinusCircle} size="2x" color="red  " onClick={remDev} /></div>
        </footer>
      </div>
    </li>
  );
}

export default DevItem;
