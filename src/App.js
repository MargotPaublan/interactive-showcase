import {HashRouter, Route, Switch} from "react-router-dom";
import ShowcaseView from './components/routes/ShowcaseView.js'
import ShowcaseEditor from './components/routes/ShowcaseEditor.js'

import React, { useState } from 'react';


/**
 * Init elements on canvas (aka showcase elements). At the beginning, this is an empty list
 */
const initCanvasItems = () => {
  return [];
}


const INITIAL_STATE = initCanvasItems();

    
const App = ()=> {
  const [items, setItems] = useState(INITIAL_STATE);
  

  /**
   * As we don't have a store to let the components communicate between each others, this method is here to listen to this component's children changes.
   */
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
