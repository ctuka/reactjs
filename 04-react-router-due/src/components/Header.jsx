import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
      <Navbar bg="primary" data-bs-theme="dark">
          <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link
                      as={NavLink}
                      to="/"
                      className={({ isActive }) => {
                          isActive ? "active" : "";
                      }}
                  >
                      Home Page
                  </Nav.Link>
                  <Nav.Link
                      as={NavLink}
                      to="/login"
                      className={({ isActive }) => {
                          isActive ? "active" : "";
                      }}
                  >
                      Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/register" className={({isActive}) => {
                    isActive ? "active" : "";}}>Register</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
  );
}
