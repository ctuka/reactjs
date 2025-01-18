import {Button, Col, Container, Image, Row} from "react-bootstrap";
import ProfileCardImage from "../../assets/images/profile-card.jpg";

export default function ReactBootstrap() {
  return (
      <div>
          <Container>
              <h1>REACT BOOTSTRAP</h1>
              <Container>
                  <Image
                      src={ProfileCardImage}
                      with={200}
                      height={200}
                      roundedCircle
                      className="d-block mx-auto"
                  />
              </Container>

              <Button
                  variant="danger"
                  size="lg"
                  className="d-block mx-auto my-3"
              >
                  React Bootstrap Button{" "}
              </Button>
              <Container className="my-3">
                  <Row className="text-center">
                      <Col className="bg-primary p-2">H</Col>
                      <Col className="bg-secondary p-2">E</Col>
                      <Col className="bg-danger p-2">L</Col>
                      <Col className="bg-success p-2">L</Col>
                      <Col className="bg-warning p-2">O</Col>
                  </Row>
              </Container>
          </Container>
      </div>
  );
}
