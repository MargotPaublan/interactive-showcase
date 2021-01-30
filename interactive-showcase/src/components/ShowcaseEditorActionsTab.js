import React, { useState } from 'react';

// Import Bootstrap components, icons and css
import { Button, Accordion, Card, Form } from 'react-bootstrap';
import { CaretDown } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


//Import own components and css
import '../css/ShowcaseEditorActionsTab.css';


const ShowcaseEditorActionsTab = (props) => {
  


  return (
    <div id="actionsTab">
      <Accordion id="tabSelectAPIItem">
        {props.availableProducts.map((availableProduct, index) => (
          <Card>
            <Card.Header>
                <div className="toggleItem">
                    <Form.Check type="checkbox"/>
                    <span>{availableProduct.name}</span>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <span><CaretDown/></span>
                    </Accordion.Toggle>
                </div>
                
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <label>Pick informations to display :</label>
                
                <Form.Group>
                    <div className="inlined">
                    <Form.Check type="checkbox"/>
                    <span>Name : {availableProduct.name}</span>
                    </div>

                    <div className="inlined">
                    <Form.Check type="checkbox"/>
                    <span>Ref : {availableProduct.ref}</span>
                    </div>

                    <div >
                    <div className="inlined">
                        <Form.Check type="checkbox"/>
                        <span>Description : {availableProduct.description}</span>
                    </div>
                    </div>
                </Form.Group>
                
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>

  );
}

export default ShowcaseEditorActionsTab;


