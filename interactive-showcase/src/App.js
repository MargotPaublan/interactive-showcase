import {HashRouter, Route, Switch} from "react-router-dom";
import ShowcaseView from './components/routes/ShowcaseView.js'
import ShowcaseEditor from './components/routes/ShowcaseEditor.js'


    
const App = (props)=> {
 
  return (
    <HashRouter>
    <div className="App">
      <Switch>
        <Route exact path="/showcase-editor" component={ShowcaseEditor}/>
        <Route exact path="/" component={ShowcaseView}/>
      </Switch>     
    </div>
    </HashRouter>    
  );
}

export default App;
