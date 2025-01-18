import { useState } from "react"
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Alert from "react-bootstrap/Alert";



export default function Hook() {
const [counter, setCounter] = useState(0);
const [name, setName] = useState("John Dee");
const [state, setState] = useState({
    number:0,
    trend:"Stable"
})

const handleClick = (() => {
    setName("John Dere");
    setCounter(counter + 1);
    console.log("Re-rendered");
    setState((previousState) => ({
        ...previousState,
        number: (previousState.number + 1),
        trend: (previousState.number%2 == 0 ?  "Unstable" :  "Stable"),
    }));
})


  return (
      <div>
          <Container>
              <Button className="mt-3" onClick={handleClick}>
                  Just For Clicking
              </Button>
              <Alert className="mt-3">{name}</Alert>
              <Alert className="mt-3">{counter}</Alert>
              <Alert className="mt-3">{state.number}/{state.trend}</Alert>
          </Container>
      </div>
  );
}
