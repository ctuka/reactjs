import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
//import Alert from "react-bootstrap/Alert";
import {useFormik} from "formik";
import * as yup from "yup";
import {wait} from "../utils/wait";

export default function FormikYup1() {

    //1) initial values
    //2) validation Schema
    //3) sumbit form

    const formik = useFormik({
        //initial values
        initialValues: {
            username: "",
            password: "",
        },
        //validation Schema
        validationSchema: yup.object({
            username: yup
                .string()
                .required("Username is required.")
                .min(3, "username can not be less than 3 charecters")
                .max(15, "username can not be more than 3 charecters"),
            password: yup
                .string()
                .required("Password is required!!!"),
        }),
        //Submit Function - onSubmit:
        onSubmit: async (values) => {
            try {
                await wait(3000);
            } catch (error) {
                console.log(error);
            } 
                
            formik.resetForm();
            

            console.log("Values " + values);

        }
    });

    console.log("Is Submitting  " + formik + "Submit");
    console.log(formik.isSubmitting);

  return (
      <Container>
        <h1 className="text-danger text-center">Form Validation Formik</h1>
          <Form
           onSubmit={formik.handleSubmit}
          >
              {/*/ FIRST NAME */}
              <Form.Group className="mt-3" controlId="username">
                  <Form.Label>User Name:</Form.Label>
                  <Form.Control
                      type="text"
                      //id="firstName"
                      name="username"
                      placeholder="Enter your Username"
                      value={formik?.values?.username}
                      onChange={formik?.handleChange}
                      required
                  ></Form.Control>
                  {
                    formik?.errors?.username && <Form.Text className="text-danger">{formik?.errors?.username}</Form.Text>
                  }
              </Form.Group>

              {/*/ LAST NAME */}
              <Form.Group className="mt-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                      type="text"
                      //id="lastName"
                      name="password"
                      placeholder="Enter your Password"
                      value={formik?.values?.password}
                      //onChange={(e) => setLastName(e.target.value)}
                      onChange={formik?.handleChange}
                  ></Form.Control>
                  {
                    formik?.errors?.password && <Form.Text className="text-danger">{formik?.errors?.password}</Form.Text>
                  }
              </Form.Group>

              <Button
                  variant="danger"
                  type="submit"
                  className="w-100 mt-3"
                 
              >
                 {
                    formik.isSubmitting ? (<> <Spinner size="sm" />  Logging In...</>) : ("Log In")
                } 
              </Button>
              
          </Form>
      </Container>
  );
}
