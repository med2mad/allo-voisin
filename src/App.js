import { useState } from "react";

function App() {

  const s = 'dsadsad';
  const b = true;
  const a = [1, 2, 3];
  const o = {o:'o'};
  const n = 5;
  
  let [v, setV] = useState([{o:1}]);
  const f=()=>{setV('false')}

  return (
    <div className="App App-header">
      <p style={{color:"red"}} >{s}</p>
      <p>{a}</p>
      <p>{n}</p>
      <p>{b}</p>
      <p>{o.o}</p>
      <p>{11}</p>
      <p>{v}</p>
      <p><button onClick={f}>click</button></p>
    </div>
  );
}

export default App;
