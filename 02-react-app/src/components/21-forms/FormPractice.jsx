import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import {wait} from "../../components/utils/wait.js";


export default function FormPractice() {
const [isLoading, setLoading] =useState(false);
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");

const handleFirstNameChange= (e) =>{
    setFirstName(e.target.value);
    console.log(firstName);
    
}
const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
}

const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
};

const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    console.log(phoneNumber);
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
        firstName,
        lastName,
        email,
        phoneNumber
    }

    setLoading(true);

try {
    await wait(3000);
    console.log("Form is sent successfully.");
    console.log("Payload : " , payload);

} catch(error) {
    console.log(error);
}
finally {
    setLoading(false);
}

    

    
}

    return (
        <div>
            <Container>
                <h1 className="text-center text-danger"> Form - 2</h1>
                {/*/ FORM */}
                <Form onSubmit={handleSubmit}>
                    {/*/ FIRST NAME */}
                    <Form.Group className="mt-3" controlId="firstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control
                            type="text"
                            //id="firstName"
                            name="firstName"
                            placeholder="Enter your First Name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        ></Form.Control>
                    </Form.Group>

                    {/*/ LAST NAME */}
                    <Form.Group className="mt-3" controlId="lastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            type="text"
                            //id="lastName"
                            name="lastName"
                            placeholder="Enter your Last Name"
                            value={lastName}
                            //onChange={(e) => setLastName(e.target.value)}
                            onChange={handleLastNameChange}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="email">
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control
                            type="email"
                            //id="email"
                            name="email"
                            placeholder="Enter your e-mail"
                            value={email}
                            onChange={handleEmailChange}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="phoneNumber">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control
                            type="number"
                            //id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Enter your Phone Number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        ></Form.Control>
                    </Form.Group>

                    <Button
                        variant="danger"
                        type="submit"
                        className="w-100 mt-3"
                        title={isLoading ? "...Sending" : "Send"} 
                        //   onClick={handleSendClick}
                        >
                    {   
                        isLoading ? (
                        <>
                             <Spinner
                                size="sm"
                                animation="grow"
                                variant="primary"/> ...Sending
                        </> ) : (
                                "Send"
                            )
                          
                    }
                       
                    </Button>
                </Form>
            </Container>
        </div>
    );
}
