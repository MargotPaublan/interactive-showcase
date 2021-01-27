import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Gear } from 'react-bootstrap-icons';

import {Link, useHistory } from "react-router-dom";

import React, { useState } from 'react';


function ShowcaseView() {
  const [show, setConnexionDialogShow] = useState(false);
  const [showWarning, setWarningShow] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitAuthentification = () => {
    //Checks authentification API
    const auth = true;


    if (auth) {
      setConnexionDialogShow(false)
      history.push("/showcase-editor");
      setWarningShow(false);
    }

    else {
      setWarningShow(true);
    }
  }

  return (
    <div className="ShowcaseView">
      <Button 
          variant="light"
          onClick={() => setConnexionDialogShow(true)}>
          <Gear/>
      </Button>
      <h1>Home - showcase view</h1>

      <Modal 
        show={show}
        onHide={() => setConnexionDialogShow(false)}
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
            show={showWarning}
            onHide={() => setWarningShow(false)}>
              Failed authentification. Please try again.
          </Alert>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={() => setConnexionDialogShow(false)}>
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

export default ShowcaseView;
