import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
//import Alert from "react-bootstrap/Alert";
import { useFormik } from "formik";
import * as yup from "yup";
import { wait } from "../utils/wait";

export default function FormikYup3() {
    //1) initial values
    //2) validation Schema
    //3) sumbit form
    const formFields = [
        {
            autoComplete: "given-name",
            label: "First Name",
            name: "firstname",
            placeholder: "Please enter your First Name",
            type: "text",
        },
        {
            autoComplete: "family-name",
            label: "Last Name",
            name: "lastname",
            placeholder: "Please enter your Last Name",
            type: "text",
        },
        {
            autoComplete: "email",
            label: "E-Mail",
            name: "email",
            placeholder: "Please enter your E-Mail",
            type: "email",
        },
        {
            autoComplete: "phoneNumber",
            label: "Phone Number",
            name: "phoneNumber",
            placeholder: "Please enter your Phone Number",
            type: "text",
        },
    ];

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
                .matches(/^\+?[0-9]{11}$/, "Phone number must be 10 digits"),
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
            <h1 className="text-danger text-center">Formik & Yup - Practice - autoComplete</h1>
            <Form onSubmit={formik.handleSubmit}>
                {/* FORM FIELDS */}
                {formFields.map((formField, index) => (
                    <Form.Group key={index} className="mt-3" controlId={formField?.name}>
                        <Form.Label>{formField.label}</Form.Label>
                        <Form.Control
                            type={formField?.type}
                            //id="firstName"
                            name={formField?.name}
                            placeholder={formField?.placeholder}
                            autoComplete={formField?.autoComplete}
                            // value={formik?.values?.firstname}
                            // onChange={formik?.handleChange}
                            // onBlur={formik.handleBlur}
                            // required
                            {...formik?.getFieldProps(formField?.name)}
                        ></Form.Control>
                        {formik?.touched[formField?.name] &&
                            formik?.errors[formField?.name] && (
                                <Form.Text className="text-danger">
                                    {formik?.errors[formField?.name]}
                                </Form.Text>
                            )}
                    </Form.Group>
                ))}

                
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
