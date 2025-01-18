import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Container from "react-bootstrap/esm/Container";


export default function Counter1() {

const [counter, setCounter] = useState(0);

function handleIncrement () {
    setCounter((prev) => prev +1);
}

const handleDecrement =() => {
    
    setCounter((prev) => {
        return prev -1;
    })
    
}

const handleReset = () =>(setCounter(0));
    


  return (
      <div>
          <Container className="mt-100">
              <h1 className="text-danger text-center">COUNTER 1</h1>
              <ButtonGroup className="w-100">
                  <Button
                      onClick={handleIncrement}
                      className="w-25"
                      variant="danger"
                  >
                      +
                  </Button>
                  <Button className="w-25" variant="secondary" disabled>
                      {counter}
                  </Button>
                  <Button
                      onClick={handleDecrement}
                      className="w-25"
                      variant="success"
                  >
                      -
                  </Button>
                  <Button onClick={handleReset} className="w-25" variant="info">
                      Reset
                  </Button>
              </ButtonGroup>
          </Container>
      </div>
  );
}
