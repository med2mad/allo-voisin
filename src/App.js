import { useState } from "react";
import Cc from "./components/Cc";

function App() {

  let [v, setV] = useState([{o:1},{o:22},{o:333},{o:4444}]);

  return (
    <div className="App App-header">
      <Cc att={v}></Cc>
    </div>
  );
}

export default App;
