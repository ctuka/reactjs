import  Button  from "react-bootstrap/Button";
import {  useContext, useReducer} from "react";
import  Container  from "react-bootstrap/Container";
import  Alert  from "react-bootstrap/Alert";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "@/store/auth-store";
import  Nav  from "react-bootstrap/Nav";
import { types } from "../store/auth-store";
import { Link } from "react-router-dom";



//initial part to send to useReducer Hook
const initialState = {
    counter: 0,
    theme: "light"
};


//Action object will tell us what to do with the type sent from dispatch
function reduce(state, action) {
    if (action.type === "increment_counter") {
      return {
        ...state,
        counter: state.counter +1
        }
    }

    if (action.type === "change_theme") {
        return {
            ...state,
            theme: state.theme === "light" ? "dark" : "light"
        }
    }

    //if non of them maches it keep the state unchanged 
    return state;
}

export default function HomePage() {

    // const [counter, setCounter] = useState(0);

    // const handleCounter = () => {
    //     setCounter(prev => prev +1);
    // }

    const [state, dispatch] = useReducer(reduce, initialState );

    const centralState = useContext(AuthContext);
    const {state: authState, dispatch: authDispatch} = centralState;

    const handleClickCounter = () => {
      //whatever is sent to disptch will maching with the action in the reducer function
      dispatch({type: "increment_counter"});
    }

    const handleTheme = () => {
        dispatch({ type: "change_theme"});
    };

    const handleLogout = () => {
        authDispatch({ type: types.LOGOUT });
    }   

  return (
    <div className="">
        <Navbar  data-bs-theme="dark" className="bg-body-tertiary">
        <Container >
        <Navbar.Brand >
            {authState.isAuthenticated ? `Welcome back ${authState?.user?.username}` : "Wellcome Stranger"}
            
        </Navbar.Brand>
            <Nav className="text light"> 
                {authState.isAuthenticated ? (
                <Button type="button" variant="danger" onClick={handleLogout}>
                    Logout
                </Button>
            ) : (<Nav.Link as={Link} to="/login">Login</Nav.Link>)} 
            </Nav>
            </Container>
        </Navbar>
        <Container className="text-center">
          <h1 className="mb-3 p-4">Home Page</h1>
          <Button
              className="w-50"
              variant="warning"
              onClick={handleClickCounter}
          >
              Increment
          </Button>
          <Button className="w-50" variant="danger" onClick={handleTheme}>
              Change Theme
          </Button>
          <Alert className="mt-3">
              <p>Counter: {state.counter}</p>
              <p>Theme: {state.theme}</p>
          </Alert>
      </Container>
 
    </div>
    );   
}
