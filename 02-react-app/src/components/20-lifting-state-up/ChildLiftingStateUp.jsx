import Button from "react-bootstrap/esm/Button";


export default function ChildLiftingStateUp(props) {
  return (
    <Button
    className="w-100"
    varian="danger"
    type="button"
    title="Increase Number"
    onClick={() => {props.handleClickProp(1);}}>
        Increase Number
        </Button>
  );
}
