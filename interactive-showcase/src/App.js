import {HashRouter, Route, Switch} from "react-router-dom";
import ShowcaseView from './components/routes/ShowcaseView.js'
import ShowcaseEditor from './components/routes/ShowcaseEditor.js'

import React, { useState } from 'react';


const initCanvasItems = () => {
  return [];
}


const INITIAL_STATE = initCanvasItems();

    
const App = (props)=> {
  const [items, setItems] = useState(INITIAL_STATE);
  

  const handleShowcaseChange = (value) => {
    setItems(value);
  }
 
  return (
    <HashRouter>
    <div id="app">
      <Switch>
        <Route 
          exact path="/showcase-editor" 
          render={(props) => (
            <ShowcaseEditor canvasItems={items} onShowcaseChanged={handleShowcaseChange} />
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
