import  Button  from "react-bootstrap/Button";
import { useReducer} from "react";
import  Container  from "react-bootstrap/Container";
import  Alert  from "react-bootstrap/Alert";

//initial part to send to useReducer Hook
const initialState = {
    counter: 0,
    theme: "light"
};


export default function HomePage() {

    // const [counter, setCounter] = useState(0);

    // const handleCounter = () => {
    //     setCounter(prev => prev +1);
    // }

    const [state, dispatch] = useReducer(reduce, initialState );

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

    const handleClickCounter = () => {
      //whatever is sent to disptch will maching with the action in the reducer function
      dispatch({type: "increment_counter"});
    }

    const handleTheme = () => {
        dispatch({ type: "change_theme"});
    };

  return (
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
  );
}
