import Child2 from "./Child2";

   
    
    export default function Child1(props) {
      return (
        <div>
          <h1>Child - 1</h1>
          {props.children}  //skipping one more line
        </div>
      )
    }
    