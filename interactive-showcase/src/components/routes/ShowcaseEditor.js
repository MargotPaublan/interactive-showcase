import React, { useState } from 'react';

// Import Bootstrap components, icons and css
import 'bootstrap/dist/css/bootstrap.min.css';


//Import own components and css
import '../../css/ShowcaseEditor.css';
import Canvas from '../Canvas.js'
import ShowcaseEditorToolbar from '../ShowcaseEditorToolbar.js'
import ShowcaseEditorActionsTab from '../ShowcaseEditorActionsTab.js'



/**
 * This component represents the view of the showcase by a staff member who want to redesign the showcase
 */
const ShowcaseEditor = (props) => {
  // Canvas items
  const [showcaseItems, setShowcaseItems] = useState(props.canvasItems);

  // Available products from the API
  const [availableProducts] = useState(initItems());

  // Signals to parent that the showcase has changed, to reflect it on the other view (client view)
  const handleShowcaseAddItem = (newItem) => {
    let newList = showcaseItems.concat([newItem]);
    setShowcaseItems(newList);
    
    props.onShowcaseChanged(showcaseItems) // callback
  }

  // Signals to parent that the showcase has changed, to reflect it on the other view (client view)
  const handleCanvasItemClick = () => {
    props.onShowcaseChanged(showcaseItems) // callback
  }




  return (
    <div id="showcaseEditor">
      <section id="workArea">
          <ShowcaseEditorToolbar showcaseItems={showcaseItems} onShowcaseAddItem={handleShowcaseAddItem}/>

          <Canvas canvasItems={showcaseItems} onItemClicked={handleCanvasItemClick}/>
      </section>

      <section id="showcaseEditorActionsTab">
        <ShowcaseEditorActionsTab availableProducts={availableProducts}/>
      </section>
    </div>
  );
}

export default ShowcaseEditor;

//Init items from back to setup displaying
// TODO : to be change when we can link it to the back
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