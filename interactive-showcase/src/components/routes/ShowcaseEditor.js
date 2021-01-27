
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Gear } from 'react-bootstrap-icons';

import {Link} from "react-router-dom";

import Canvas from '../Canvas.js'

import React, { useState } from 'react';

const initRect = (itemId) => {
  return {
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
    draggable: true,
    infos: {
      title : "Collier",
      contenu: "Contenu"
    }
  };
}



const ShowcaseEditor = (props) => {
  const [items, setItems] = useState(props.canvasItems);

  const addShape = () => {
    let newList = items.concat([initRect(items.length)]);
    setItems(newList);
  }

  const saveShowcase = () => {
    props.onItemsChanged(items)
  }

  const handleCanvasItemsChange = (value) => {
    setItems(value);
  }

  return (
    <div className="ShowcaseEditor">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={addShape}>Add shape</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="secondary" onClick={saveShowcase}>Save</Button>
      </ButtonGroup>

      <Link to="/"><Button variant="info"><Gear/></Button></Link>
      <h1>Showcase editor</h1>
      <Canvas canvasItems={items} test={handleCanvasItemsChange}/>
    </div>
  );
}

export default ShowcaseEditor;
