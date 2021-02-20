import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Gear } from 'react-bootstrap-icons';



import React, { useState } from 'react';

import ConnexionModal from '../ConnexionModal.js'
import Canvas from '../Canvas.js'

/**
 * This component represents the view of the showcase by a client
 */
function ShowcaseView(props) {
  const [displayConnexionForm, setDisplayConnexionForm] = useState(false);
  const [items] = useState(props.canvasItems);
  

  

  const handleDisplayConnexionChange = (value) => {
    setDisplayConnexionForm(value);
  }

  return (
    <div className="ShowcaseView">
      <Button 
          variant="info"
          onClick={() => setDisplayConnexionForm(true)}>
          <Gear/>
      </Button>

      <h1>Home - Showcase view</h1>

      <Canvas canvasItems={items}/>

      <ConnexionModal displayConnexion={displayConnexionForm} onDisplayConnexionChange={handleDisplayConnexionChange}/>
    </div>
  );
}

export default ShowcaseView;
