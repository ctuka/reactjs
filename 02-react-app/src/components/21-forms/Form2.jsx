import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Form2() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    });

    const handleFormData = (event) => {
        console.log(event.target.name)
        const {name, value} = event.target;
        setFormData((prevData) => {
            return {
            ...prevData,
            [name]:value,
            
        };
        });
        console.log("Form Data: ", formData);
    };

    const handleSendClick = (e) => {
        e.preventDefault();
        const payload = { //also can be called as dto                               
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
        };
        console.log(payload);
    }

    return (
        <div>
            <Container>
                <h1 className="text-center text-danger"> Form - 2</h1>
                <Form.Group>
                    <Form.Label htmlFor="firstName">First Name:</Form.Label>

                    <Form.Control
                        type="input"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleFormData}
                    ></Form.Control>
                    <Form.Label htmlFor="lastName">Last Name:</Form.Label>

                    <Form.Control
                        type="input"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleFormData}
                    ></Form.Control>
                    <Form.Label htmlFor="email">E-mail:</Form.Label>

                    <Form.Control
                        type="input"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormData}
                    ></Form.Control>
                    <Form.Label htmlFor="phoneNumber">Phone Number:</Form.Label>

                    <Form.Control
                        type="input"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleFormData}
                    ></Form.Control>
                </Form.Group>
                <Button variant="danger" type="submit" className="w-100 mt-3" onClick={handleSendClick}>Send</Button>
            </Container>
        </div>
    );
}
