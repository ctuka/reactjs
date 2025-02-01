import Container from "react-bootstrap/Container";
import Child1 from "../components/Child1";
import Child2 from "../components/Child2";


export default function HomePage() {
  const data = {
    name: "John",
    lastName: "Doe",
    age: 30
  }

  return (
      <Container>
          <h1 className="text-center text-danger">Home Page</h1>
          <Child1>
              <Child2 data={data} /> //this is for skipping one more line 
          </Child1>
      </Container>
  );
}
