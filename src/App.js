import { useState, useEffect } from "react";
import Cf from "./components/Cf";
import C2 from "./components/C2";
import useH from "./useH";
import {BrowserRouter , Route, Switch, Link} from "react-router-dom";

function App() {

  const customH = useH();

  let [v, setV] = useState([{o:1},{o:22},{o:333},{o:4444}]);
  useEffect(()=>{console.log("side Effect");} , [])

  return ( <div className="App App-header">

    <BrowserRouter>
    
      <Link to="/">Home</Link>
      <Link to="cf">Cf</Link>
      <Link to="c2">C2</Link>

      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/c2">
          <C2></C2>
        </Route>
        <Route path="/cf">
          <Cf att={customH}></Cf>
        </Route>
      </Switch>
      
    </BrowserRouter>

  </div>);
}

export default App;
