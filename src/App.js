import { useState, useEffect} from "react";
import Cc from "./components/Cc";

function App() {

  const [a, seta] = useState([{o:1},{o:22},{o:333},{o:4444}]);
  const [e, sete] = useState(4);
  const b = true;
  const o = {o:12};

  function handleDelete(p){
    const newblogs = a.filter( item => item.o !== p);
    seta(newblogs);
  }
  function handleEdit(){
    sete(e+1);
  }
  useEffect(()=>{console.log('side effect');} , [e]);

  return (
    <div className="App App-header">
      {a && <Cc array={a} object={o} boolean={b} handleDelete={handleDelete} ></Cc>}
      <button onClick={handleEdit}>Edit</button>
      <p>{e}</p>
    </div>
  );
}

export default App;
