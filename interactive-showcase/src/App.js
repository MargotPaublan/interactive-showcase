import {HashRouter, Route, Switch} from "react-router-dom";
import ShowcaseView from './components/routes/ShowcaseView.js'
import ShowcaseEditor from './components/routes/ShowcaseEditor.js'

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
    draggable: false,
    infos: {
      title : "Collier",
      contenu: "Contenu"
    }
  };
}

const initCanvasItems = () => {
  return [];
}


const INITIAL_STATE = initCanvasItems();

    
const App = (props)=> {
  const [items, setItems] = useState(INITIAL_STATE);
  console.log(items);

  const handleCanvasItemsChange = (value) => {
    setItems(value);
  }
 
  return (
    <HashRouter>
    <div id="app">
      <Switch>
        <Route 
          exact path="/showcase-editor" 
          render={(props) => (
            <ShowcaseEditor canvasItems={items} onItemsChanged={handleCanvasItemsChange} />
          )}/>
        <Route 
          exact path="/" 
          render={(props) => (
            <ShowcaseView canvasItems={items}/>
          )}/>
      </Switch>     
    </div>
    </HashRouter>    
  );
}

export default App;
