import { useState, useEffect} from "react";
import Cc from "./components/Cc";

function App() {

  const [a, seta] = useState([{o:1},{o:22},{o:333},{o:4444}]);
  const b = true;
  const o = {o:12};

  function handleDelete(p){
    const newblogs = a.filter( item => item.o !== p);
    seta(newblogs);
  }

  useEffect(()=>{console.log('side effect');});

  return (
    <div className="App App-header">
      <Cc array={a} object={o} boolean={b} handleDelete={handleDelete} ></Cc>
    </div>
  );
}

export default App;
