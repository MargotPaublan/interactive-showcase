import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Gear } from 'react-bootstrap-icons';

import {useHistory } from "react-router-dom";

import React, { useEffect, useState } from 'react';


function ConnexionModal(props) {
  const [show, setConnexionDialogShow] = useState(props.displayConnexion);
  const [showWarning, setWarningShow] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitAuthentification = () => {
    //Checks authentification API
    //TODO : change const authentification value when we can contact API
    const auth = true;


    if (auth) {
        setWarningShow(false);
        setConnexionDialogShow(false)
        history.push("/showcase-editor");
      
    }

    else {
      setWarningShow(true);
    }
  }

  useEffect(() => {
    setConnexionDialogShow(props.displayConnexion);
  });

  return (
    <div className="ShowcaseView">
      <Modal 
        show={show}
        onHide={() => setConnexionDialogShow(props.onDisplayConnexionChange(false))}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicIdentifier">
              <Form.Label>Identifiant</Form.Label>
              <Form.Control 
                placeholder="Entrer l'identifiant"
                value={id}
                onChange={e => setId(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Mot de passe"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

          </Form>
          <Alert 
            variant="danger"
            show={showWarning}>
              Failed authentification. Please try again.
          </Alert>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
              setWarningShow(false);
              setConnexionDialogShow(props.onDisplayConnexionChange(false));
          }}>
            Annuler
          </Button>
          <Button variant="primary" type="submit" onClick={() => submitAuthentification(false)}>
            Se connecter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConnexionModal;
