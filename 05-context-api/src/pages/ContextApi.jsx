import { useContext } from "react"
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Content from "@/components/Content";


export default function ContextApi() {

    //const context = useContext();
  return (
      <Container>
          <Link to={"/"}>Go to Home Page</Link>
          <h1 className="text-center text-primary"> Context Api</h1>
          <Content/>
      </Container>
  );
}
