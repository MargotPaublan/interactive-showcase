// Import Bootstrap components, icons and css
import {ButtonGroup, Button, Popover,  OverlayTrigger} from 'react-bootstrap';
import { Gear } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import react-router links
import {Link} from "react-router-dom";

//Import own css
import '../css/ShowcaseEditor.css';


/**
 * This component represents toolbar in showcase editing
 */
const ShowcaseEditorToolbar = (props) => {

  // Adds square to its parent list of showcase items. This is reflected on the displaying of the canvas elements, in the canvas component.
  const addSquare = () => {
    props.onShowcaseAddItem(initRect());
  }

  // Adds circle to its parent list of showcase items. This is reflected on the displaying of the canvas elements, in the canvas component.
  const addCircle = () => {
    props.onShowcaseAddItem(initCircle());
  }


  // Save the showcase in BDD. Only the stream of the JSON showcase object is sent.
  const saveShowcaseinBDD = () => {
    // TODO
  }

  
  const handleClickButtonSave = () => {
    // Save showcase in BDD
    saveShowcaseinBDD();
  }


  // Popover to show when the add shape button is clicked
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
      <div id="showcaseEditorToolbar">
        <div>
          <ButtonGroup aria-label="Basic example">
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <Button variant="secondary">Add shape</Button>
            </OverlayTrigger>
            <Button variant="secondary" onClick={handleClickButtonSave}>Save</Button>
          </ButtonGroup>

          <Link to="/"><Button variant="info"><Gear/></Button></Link>
        </div>
        
        <h1>Showcase editor</h1>
      </div>
  );
}

export default ShowcaseEditorToolbar;



const initRect = () => {
  return {
    shape: 'rect',
    width: 100,
    height: 100,
    fill: "rgb(204, 242, 255, 0.4)",
    cornerRadius: 5,
    shadowColor: "black",
    shadowBlur: 10,
    shadowOpacity: 0.1,
    stroke: 'rgb(118, 173, 184, 0.4)',
    strokeWidth: 2,
    x: 50,
    y: 50,
    draggable: true
  };
}


const initCircle = () => {
  return {
    shape: 'circle',
    x: 50,
    y: 50,
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
