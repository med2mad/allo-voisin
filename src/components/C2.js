import { useParams } from "react-router-dom";

function Cf() {
  const {id} = useParams();
  return (<h1>C2 {id}</h1>);
}

export default Cf;
