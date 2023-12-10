import { useState, useEffect } from "react";
import Cf from "./components/Cf";
import C2 from "./components/C2";
import useH from "./useH";
import {BrowserRouter , Route, Switch, Link} from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";


function App() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "webgl build.loader.js",
    dataUrl: "webgl.data",
    frameworkUrl: "build.framework.js",
    codeUrl: "build.wasm",
  });

  
  const customH = useH();

  let [id, setId] = useState(1);
  useEffect(()=>{console.log("side Effect"); return ()=>{console.log("-abbort!");} ;} , [])

  return ( <div className="App App-header">

<Unity unityProvider={unityProvider} />

    <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />

    <BrowserRouter>
    
      <Link to="/">Home</Link>
      <Link to="/cf">Cf</Link>
      <Link to="/c2">C2</Link>
      <Link to={`/c2/${id}`}>C2 {id}</Link>

      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/cf">
          <Cf att={customH}></Cf>
        </Route>
        <Route path="/c2/:id">
          <C2></C2>
        </Route>
        <Route path="/c2">
          <h1>C2</h1>
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
      
    </BrowserRouter>
  
  </div>);
}

export default App;
