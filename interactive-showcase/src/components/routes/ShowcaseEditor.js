
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/ShowcaseEditor.css';
import { Gear, CaretDown } from 'react-bootstrap-icons';

import {Link} from "react-router-dom";

import Canvas from '../Canvas.js'

import React, { useState } from 'react';

const initRect = (itemId) => {
  return {
    shape: 'rect',
    id: itemId,
    width: 100,
    height: 100,
    fill: "rgb(204, 242, 255, 0.4)",
    cornerRadius: 5,
    shadowColor: "black",
    shadowBlur: 10,
    shadowOpacity: 0.1,
    stroke: 'rgb(118, 173, 184, 0.4)',
    strokeWidth: 2,
    x: window.innerWidth/2,
    y: window.innerHeight/2,
    draggable: true
  };
}


const initCircle = (itemId) => {
  return {
    shape: 'circle',
    id: itemId,
    x: window.innerWidth/2,
    y: window.innerHeight/2,
    radius: 50,

    fill: "rgb(204, 242, 255, 0.4)",
    shadowColor: "black",
    shadowBlur: 10,
    shadowOpacity: 0.1,
    stroke: 'rgb(118, 173, 184, 0.4)',
    strokeWidth: 2,
    
    draggable: true

  };
}

const initItems = () => {
  return [
    {
      id: 0,
      ref: '000',
      name: 'Collier argent',
      description: "collier en argent",
      photos: ['https://www.histoiredor.com/fr_FR/p/collier-clothilde-or-blanc-topaze-et-oxyde-de-zirconium/B3CFBTB505C.html?esl-k=sem-google|nu|c297474607365|m|k300938034716|p|t|dc|a57927468897|g1584680109&gclid=CjwKCAiApNSABhAlEiwANuR9YNHA18u61owgc0Yfoy_3yN6_NCyeYwIcy6eKqrZzRCZiHkua3SWwwRoC9YoQAvD_BwE']
    },
    {
      id: 1,
      ref: '111',
      name: 'Collier or',
      description: "Collier en or",
      photos: ['https://www.edenly.com/bijoux/collier-coeur-pliage-ors,2462.html?popin=no&gpays=FR&glang=fr&utm_source=ggshopping_fr&utm_medium=feedshopping_fr&utm_campaign=ggpla_fr&gclid=CjwKCAiApNSABhAlEiwANuR9YB_mBD1jEbOp4GsAOllZqHqr8aUTJGXx69uwrjx6JqMHayTun18E1RoC87oQAvD_BwE']
    },
    
  ];
}



const ShowcaseEditor = (props) => {
  const [items, setItems] = useState(props.canvasItems);
  const [availableProducts, setAvailableProducts] = useState(initItems());


  const addSquare = () => {
    let newList = items.concat([initRect(items.length)]);
    setItems(newList);
  }

  const addCircle = () => {
    let newList = items.concat([initCircle(items.length)]);
    setItems(newList);
  }

  const saveShowcase = () => {
    props.onItemsChanged(items)
  }

  const handleCanvasItemsChange = (value) => {
    setItems(value);
  }

  const handleItemClick = (canvasElement) => {
    if (canvasElement.infos != undefined) {
      //do nothing now
    }
    else {
      const product = availableProducts.find(element => element.ref == canvasElement.ref);
      //pre-select the checkbox item on the right
    }
    
  }

  const popover = (
    <Popover id="popover-button-shape">
      <Popover.Content>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={addSquare}>Rectangle</Button>
          <Button variant="secondary" onClick={addCircle}>Circle</Button>
        </ButtonGroup>
      </Popover.Content>
    </Popover>
  );

  return (
    <div id="showcaseEditor">
      <section id="showcase">
        <div>
          <ButtonGroup aria-label="Basic example">
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <Button variant="secondary">Add shape</Button>
            </OverlayTrigger>
            
            <Button variant="secondary" disabled>Disabled</Button>
            <Button variant="secondary" onClick={saveShowcase}>Save</Button>
          </ButtonGroup>

          <Link to="/"><Button variant="info"><Gear/></Button></Link>
        </div>
        
        <h1>Showcase editor</h1>

        <Canvas canvasItems={items} test={handleCanvasItemsChange}  onItemClicked={handleItemClick}/>
      </section>

      
      

      <section id="actions">
        <Accordion>

            {availableProducts.map((availableProduct, index) => (
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

      </section>
    </div>
  );
}

export default ShowcaseEditor;
