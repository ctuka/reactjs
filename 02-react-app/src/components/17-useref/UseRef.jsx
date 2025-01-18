import Container from "react-bootstrap/esm/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import LongText from "./LongText";
import Button from "react-bootstrap/esm/Button";
import { useRef } from "react";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";


export default function UseRef() {

    const inputRef = useRef(null);
    const topRef = useRef(null);
    const footerRef = useRef(null);

    const handleFocus = () => {
        console.log(inputRef);
        inputRef.current.focus();
        let text = inputRef.current.value;
        console.log(text);
    }

    const handleGotoTopButton = () => {
        window.scrollTo(0,0);
        topRef.current.focus();
        
    }

    const handleClickFooter = () => {
        footerRef.current.scrollIntoView({behavior : "smooth"});
    }

  return (
    <Container>
        <span ref={topRef}>### This is Span #####  </span>
        <Button onClick={handleClickFooter}>Go to the Footer</Button>
        <LongText />
        <InputGroup className="mt-3">
            <Form.Control
            ref={inputRef}
            type="text"
            placeholder="johndere@gmail.com"
            />

            <Button onClick={handleFocus}>Subscribe</Button>
        </InputGroup>
        <ButtonGroup>
            <Button variant="success" className="w-50" onClick={handleGotoTopButton}>Go to the Top</Button>
        </ButtonGroup>
        <footer ref={footerRef}>2024</footer>
    </Container>
   
  );
}
