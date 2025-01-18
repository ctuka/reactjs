import { useState } from "react"
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";


export default function Form1() {

    const [username, setUsername] = useState("");

    const handleUsernameChange = (event) => {
       setUsername(event.target.value);
       console.log(username);
    }


  return (
    <div>
      <Container>
        <h1 className="text-center text-danger"> Form - 1</h1>
        <Form.Label htmlFor="username">
          Username:
        </Form.Label>

        <Form.Control type="input" id="username" name="username" onChange={handleUsernameChange}>

        </Form.Control>
      </Container>
    </div>
  )
}
