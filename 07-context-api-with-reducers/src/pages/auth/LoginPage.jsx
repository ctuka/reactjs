import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import  Form  from "react-bootstrap/Form";


export default function LoginPage() {
  return (
      <div className="bg-dark text-light" style={{ minHeight: "100vh" }}>
          <Container className="p-4">
              <h1 className="text-centr text-primary">Login to your account</h1>
              <Form
              //onClick={handleSubmit}
              >
                  <Form.Group controlId="username" className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Enter your username"
                          name="username"
                          //value={username}
                          //onChange={handleChange}
                      />
                  </Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Group controlId="password" className="mb-3">
                      <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          name="password"
                          //value={username}
                          //onChange={handleChange}
                      />
                  </Form.Group>
                  <Button type="submit" className="w-100 mt-3" >Login</Button>
              </Form>
          </Container>
      </div>
  );
}
