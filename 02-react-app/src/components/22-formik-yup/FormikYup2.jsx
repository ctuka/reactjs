import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
//import Alert from "react-bootstrap/Alert";
import { useFormik } from "formik";
import * as yup from "yup";
import { wait } from "../utils/wait";

export default function FormikYup2() {
    //1) initial values
    //2) validation Schema
    //3) sumbit form

    const formik = useFormik({
        //initial values
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: "",
        },
        //validation Schema
        validationSchema: yup.object({
            firstname: yup
                .string()
                .required("First Name is required.")
                .min(2, "First Name can not be less than 2 charecters")
                .max(15, "First Name can not be more than 315charecters"),
            lastname: yup
                .string()
                .required("Last Name is required.")
                .min(2, "Last Name can not be less than 2 charecters")
                .max(15, "Last Name can not be more than 315charecters"),
            email: yup
                .string()
                .required("Email can not be left empty")
                .email("Use a valid email address"),
            phoneNumber: yup
                .string()
                .matches(
                    /^\+?[0-9]{11}$/,
                    "Phone number must be 10 digits"
                )
        }),
        //Submit Function - onSubmit:
        onSubmit: async (values) => {
            try {
                await wait(3000);
            } catch (error) {
                console.log(error);
            }

            formik.resetForm();

            //console.log("Values " + values);
        },
    });
    console.log(formik);
   //console.log("Is Submitting  " + formik + "Submit");
    //console.log(formik.isSubmitting);

    return (
        <Container>
            <h1 className="text-danger text-center">Formik & Yup - Practice</h1>
            <Form onSubmit={formik.handleSubmit}>
                {/*/ FIRST NAME */}
                <Form.Group className="mt-3" controlId="firstname">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                        type="text"
                        //id="firstName"
                        name="firstname"
                        placeholder="Enter your Username"
                        // value={formik?.values?.firstname}
                        // onChange={formik?.handleChange}
                        // onBlur={formik.handleBlur}
                        // required
                        {...formik?.getFieldProps("firstname")}
                    ></Form.Control>
                    {formik?.touched?.firstname && formik?.errors?.firstname && (
                        <Form.Text className="text-danger">
                            {formik?.errors?.firstname}
                        </Form.Text>
                    )}
                </Form.Group>

                {/*/ LAST NAME */}
                <Form.Group className="mt-3" controlId="lastname">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                        type="text"
                        //id="firstName"
                        name="lastname"
                        placeholder="Enter your Lastname"
                        value={formik?.values?.lastname}
                        onChange={formik?.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    ></Form.Control>
                    {formik?.touched?.lastname && formik?.errors?.lastname && (
                        <Form.Text className="text-danger">
                            {formik?.errors?.lastname}
                        </Form.Text>
                    )}
                </Form.Group>

                {/*/ EMAIL */}
                <Form.Group className="mt-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        //id="firstName"
                        name="email"
                        placeholder="Enter your Username"
                        value={formik?.values?.email}
                        onChange={formik?.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    ></Form.Control>
                    {formik?.touched?.email && formik?.errors?.email && (
                        <Form.Text className="text-danger">
                            {formik?.errors?.email}
                        </Form.Text>
                    )}
                </Form.Group>

                {/*/ PHONE NUMBER */}
                <Form.Group className="mt-3" controlId="phoneNumber">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control
                        type="text"
                        //id="firstName"
                        name="phoneNumber"
                        placeholder="Enter your Phone Number"
                        value={formik?.values?.phoneNumber}
                        onChange={formik?.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    ></Form.Control>
                    {formik?.touched?.phoneNumber && formik?.errors?.phoneNumber && (
                        <Form.Text className="text-danger">
                            {formik?.errors?.phoneNumber}
                        </Form.Text>
                    )}
                </Form.Group>

                <Button variant="danger" type="submit" className="w-100 mt-3">
                    {formik.isSubmitting ? (
                        <>
                            {" "}
                            <Spinner size="sm" /> Logging In...
                        </>
                    ) : (
                        "Log In"
                    )}
                </Button>
            </Form>
        </Container>
    );
}
