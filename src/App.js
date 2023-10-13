import { useState } from "react";
import Cf from "./Cf";

function App() {

  const s = 'dsadsad';
  const b = true;
  const a = [1, 2, 3];
  const o = {o:'o'};
  const n = 5;
  
  let [v, setV] = useState([{o:1},{o:22},{o:333},{o:4444}]);

  return (
    <div className="App App-header">
      <Cf></Cf>
      {v.map((b)=>(<h1 key={b.o}>{b.o}</h1>))}
    </div>
  );
}

export default App;
