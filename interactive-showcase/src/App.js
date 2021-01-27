import {HashRouter,Link,Route,Switch} from "react-router-dom";


import ShowcaseView from './components/routes/ShowcaseView.js'
import ShowcaseEditor from './components/routes/ShowcaseEditor.js'


    
const App = (props)=> {
 
  return (
    <HashRouter>
    <div className="App">
      <div className="menu">
        <Link to="/"><h2>ShowcaseView</h2></Link>
        <Link to="/showcase-editor"><h2>ShowcaseEditor</h2></Link>
      </div>
      <Switch>
        <Route exact path="/" component={ShowcaseView}/>
        <Route exact path="/showcase-editor" component={ShowcaseEditor}/>
      </Switch>     
    </div>
    </HashRouter>    
  );
}

export default App;
