import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Alert from "react-bootstrap/Alert";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useEffect, useState } from "react";


export default function UseEffect() {

const [counter, setCounter] = useState(0);
const handleClick = () => setCounter((previous) => previous +1 );
const [error, setError] = useState(false);
const [num, setNum] = useState(0);

const handleError = () => {
  setError(prev => !prev);
}

//======  useEffect =================

useEffect(() => {
    console.log("This will be written only at first run")
}, []);

useEffect(() => {
    console.log("I am going to be written whenever component renders and rerenders")
});

useEffect(() => {
    console.log(
        "I am going to be written whenever counter changes component renders and rerenders"
    ), [counter];
});

// useEffect(() => {
//     console.log(
//         "I am going to be written whenever error state  changes component renders and rerenders"
//     ),
//         [error];
// });

useEffect(() => {
  return () => {
    console.log("#######  4- I am going to be writtenwhenever component is unmounted");
  }
}, []);

useEffect(() => {
    console.log(
        "I am going to be written whenever error state  changes component renders and rerenders"
    );
    
    return () => {
        setNum(prev => prev + 1);
            console.log(
                `####### ${num} 4- I am going to be writtenwhenever component is unmounted ###################  4 `
            );
        }
       
     
}, [error]);

  return (
      <div>
          <Container>
              <h1 className="text-center text-danger">
                  USE EFFECT useEffect() HOOK
              </h1>

              <ButtonGroup>
                  <Button
                      className="mt-3 w-100"
                      variant="outline-warning"
                      onClick={handleClick}
                  >
                      Increase Counter
                  </Button>
                  <Button
                      className="mt-3 w-100"
                      variant="outline-danger"
                      onClick={handleError}
                  >
                      Set Error
                  </Button>
              </ButtonGroup>
              <Alert className="mt-3 text-center">{counter}</Alert>
              {/*error && <Alert className="text-center" variant="danger" > Invalid Credidentals</Alert>*/}
          </Container>
      </div>
  );
}
