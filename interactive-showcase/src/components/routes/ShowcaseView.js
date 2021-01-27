import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Gear } from 'react-bootstrap-icons';

import React, { useState } from 'react';

import ConnexionModal from '../ConnexionModal.js'


function ShowcaseView() {
  const [displayConnexionForm, setDisplayConnexionForm] = useState(false);
  


  const handleDisplayConnexionChange = (value) => {
    setDisplayConnexionForm(value);
  }

  return (
    <div className="ShowcaseView">
      <Button 
          variant="light"
          onClick={() => setDisplayConnexionForm(true)}>
          <Gear/>
      </Button>
      <h1>Home - showcase view</h1>

      <ConnexionModal displayConnexion={displayConnexionForm} onDisplayConnexionChange={handleDisplayConnexionChange}/>
    </div>
  );
}

export default ShowcaseView;
