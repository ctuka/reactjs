import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import ChildLiftingStateUp from "./ChildLiftingStateUp";

export default function ParentLiftingStateUp() {
    const [counter, setCounter] = useState(0);

    const handleClick = (incr) => {
        setCounter(prev => prev + incr );
    };

    return (
        <Container>
            <h1 className="text-center text-danger">
                
                PAerentLifting State Up
            </h1>

            <h3 className="text-center">{counter} times clicked</h3>
            <ChildLiftingStateUp handleClickProp={handleClick} />
            <Button
                className="w-100"
                variant="danger"
                type="button"
                title="increase number"
                onClick={() => {handleClick(2);}}
            >
                Increase Number
            </Button>
        </Container>
    );
}
