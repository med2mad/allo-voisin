import { useState } from "react";
import Cc from "./components/Cc";

function App() {

  let [a, seta] = useState([{o:1},{o:22},{o:333},{o:4444}]);
  let b = true;
  let o={o:12};

  function handleDelete(p){
    const newblogs = a.filter( item => item.o !== p);
    seta(newblogs);
  }

  return (
    <div className="App App-header">
      <Cc array={a} object={o} boolean={b} handleDelete={handleDelete} ></Cc>
    </div>
  );
}

export default App;
