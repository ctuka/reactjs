import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { wait } from "../../components/utils/wait.js";

export default function FormPractice() {
    const [isLoading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        phoneNumber : ""
    });
    const [error, setError] = useState({
        firstName : null,
        lastName : null,
        email : null,
        phoneNumber : null
    });
    

    const handleFormData = (event) => {
        //event.preventDefault();
        const {name, value} = event.target;

        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        });

        if(name === "firstName") {
            if(value.trim() === "")  {
                setError((previousState) => {
                    return {
                        ...previousState,
                        firstName: "You cannot left  First Name empty ",
                        commonMessage: null
                    }
                    
                 });
        } else {
            setError((previousState) => {
                return {
                    ...previousState,
                    firstName: null,
                };
            });
        }
        }
        if (name === "lastName") {
            if (value.trim() === "") {
                setError((previousState) => {
                    return {
                        ...previousState,
                        lastName: "You cannot left  Last Name empty ",
                        commonMessage: null,
                    };
                });
            } else {
                setError((previousState) => {
                    return {
                        ...previousState,
                        lastName: null,
                    };
                });
            }
        }
        if (name === "email") {
            if (value.trim() === "") {
                setError((previousState) => {
                    return {
                        ...previousState,
                        email: "You cannot left  email empty ",
                        commonMessage: null,
                    };
                });
            } else {
                setError((previousState) => {
                    return {
                        ...previousState,
                        email: null,
                    };
                });
            }
        }
        if (name === "phoneNumber") {
            if (value.trim() === "") {
                setError((previousState) => {
                    return {
                        ...previousState,
                        phoneNumber: "You cannot left  Phone Number empty ",
                        commonMessage: null,
                    };
                });
            } else {
                setError((previousState) => {
                    return {
                        ...previousState,
                        phoneNumber: null,
                    };
                });
            }
        }

        
        
    };

    

    const handleSend = async (e) => {
        e.preventDefault();
        const payload = //formData;
        {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
        };

        setLoading(true);

        if (Object.values(formData).some((val) => val.trim() === "")) {
            setError((previousState) => {
                return {
                    ...previousState,
                    commonMessage: "All fields can not be left empty",
                };
            });
        } else {
            setError((previousState) => {
                return {
                    ...previousState,
                    commonMessage: null,
                };
            });
        }

        try {
            await wait(3000);
            console.log("Form is sent successfully.");
            console.log("Payload : ", payload);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Container>
                <h1 className="text-center text-danger">
                    {" "}
                    Form - Validation - Manually
                </h1>
                {/*/ FORM */}
                <Form onSubmit={handleSend}>
                    {/*/ FIRST NAME */}
                    <Form.Group className="mt-3" controlId="firstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control
                            type="text"
                            //id="firstName"
                            name="firstName"
                            placeholder="Enter your First Name"
                            value={formData.firstName}
                            onChange={handleFormData}
                            required
                        ></Form.Control>
                        {error.firstName && (
                            <p className="text-danger">{error.firstName}</p>
                        )}
                    </Form.Group>

                    {/*/ LAST NAME */}
                    <Form.Group className="mt-3" controlId="lastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            type="text"
                            //id="lastName"
                            name="lastName"
                            placeholder="Enter your Last Name"
                            value={formData.lastName}
                            //onChange={(e) => setLastName(e.target.value)}
                            onChange={handleFormData}
                        ></Form.Control>
                        {error.lastName && (
                            <p className="text-danger">{error.lastName}</p>
                        )}
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="email">
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control
                            type="email"
                            //id="email"
                            name="email"
                            placeholder="Enter your e-mail"
                            value={formData.email}
                            onChange={handleFormData}
                        ></Form.Control>
                        {error.email && (
                            <p className="text-danger">{error.email}</p>
                        )}
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="phoneNumber">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control
                            type="number"
                            //id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Enter your Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleFormData}
                        ></Form.Control>
                        {error.phoneNumber && (
                            <p className="text-danger">{error.phoneNumber}</p>
                        )}
                    </Form.Group>

                    <Button
                        variant="danger"
                        type="submit"
                        className="w-100 mt-3"
                        title={isLoading ? "...Sending" : "Send"}
                        //   onClick={handleSendClick}
                    >
                        {isLoading ? (
                            <>
                                <Spinner
                                    size="sm"
                                    animation="grow"
                                    variant="light"
                                />{" "}
                                ...Sending
                            </>
                        ) : (
                            "Send"
                        )}
                    </Button>
                    {error.commonMessage && (
                        <Alert variant="danger">{error.commonMessage}</Alert>
                    )}
                </Form>
            </Container>
        </div>
    );
}
