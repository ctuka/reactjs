import { useContext, useState} from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import  Form  from "react-bootstrap/Form";
import { AuthContext } from "@/store/auth-store";
import  {login}  from "@/api/login";
import { types } from "@/store/auth-store";
import { useNavigate } from "react-router-dom";




export default function LoginPage() {
    const [username, setUsername] = useState("emilys");
    const [password, setPassword] = useState("emilyspass");

    const centralState = useContext(AuthContext);
    console.log(centralState);
    const { dispatch } = centralState;
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // it will prevent the page from reloading
        console.log("Form submited");
        const payload = { username, password };
        
        try {
            const response = await login(payload);
            console.log(response);
            if(!response.ok) throw new Error("Login failed");
            dispatch({
                type: types.LOGIN,
                payload: response
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
        
    }

  return (
      <div className="bg-dark text-light" style={{ minHeight: "100vh" }}>
          <Container className="p-4">
              <h1 className="text-center text-primary">Login to your account</h1>
              <Form
              onClick={handleSubmit}
              >
                  <Form.Group controlId="username" className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Enter your username"
                          name="username"
                          value={username}
                          onChange={handleChange}
                      />
                  </Form.Group>
                  <Form.Group controlId="password" >
                    <Form.Label>Password</Form.Label>
                      <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                      />
                  </Form.Group>
                  <Button type="submit" className="w-100 mt-3" >Login</Button>
              </Form>
          </Container>
      </div>
  );
}
