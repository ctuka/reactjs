import { useContext } from "react";
import { ThemeContext } from "../store/store";
import Button from "react-bootstrap/Button";


export default function Child3({data2}) {

  const centralState = useContext(ThemeContext);
  console.log(centralState);


  return (
      <div>
          <h3>Child - 3</h3>
          <p>Name: {data2.name}</p>
          <p>LAst Name: {data2.lastName}</p>
          <p>Age: {data2.age}</p>
          <Button onClick= {centralState.handleTheme}>
            Change Theme
          </Button>
      </div>
  );
}
