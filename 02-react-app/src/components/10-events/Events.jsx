import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default function Events() {

    const nam = "Tevfik";

    
    const buttonClickHandler = () => {
        console.log("Button without argument clicked");
        alert("Clicked");
    }

     const buttonWithoutArgumentButWithEvent =  (event) => {
        console.log("Without argument but with event = " + event.target);
     }

    const buttonWithArgumentsHandler = (name) => {
        console.log("Hello Mr " + name + " How are you?");
        alert(`${name}`);
    }

    const buttonWithArgumentAndWithEvent = (event, argument) => {
        console.log("Without argument but with event = " + event.target +"    " + argument);
    }

   

  return (
      <div>
          <Container>
              <ButtonGroup className="my-2">
                  <Button onClick={buttonClickHandler}>Without Argument</Button>
                  <Button
                      variant="warning"
                      onClick={buttonWithoutArgumentButWithEvent}
                  >
                      Without Argument But With Event
                  </Button>
                  <Button
                      variant="danger"
                      onClick={() => buttonWithArgumentsHandler(nam)}
                  >
                      With Arguments
                  </Button>
                  <Button
                      variant="success"
                      onClick={(event) =>
                          buttonWithArgumentAndWithEvent(event, nam)
                      }
                  >
                      With Arguments And With Event
                  </Button>
              </ButtonGroup>
          </Container>
      </div>
  );
}
