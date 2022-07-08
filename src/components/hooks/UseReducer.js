import React, { useState, useReducer } from "react";
import { Button } from "react-bootstrap";
import { Divider } from "antd";

const initialState = 0;
const reducer = (count, action) => {
  // console.log(action);
  if (action.type === "INC") {
    return count + 1;
  }
  if (action.type === "DNC") {
    return count - 1;
  }
};

const UseReducer = () => {
  //   const [count, setCount] = useState(0);
  useReducer(reducer, initialState);
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Divider className="text-warning">UseReducer</Divider>
      <div className="text-center">
        <p className="h3 text-secondary">Learn UseReducer</p>
        <p className="h4 text-secondary">{count}</p>
        <Button
          className="px-5 py-2 btn-primary"
          style={{ marginRight: "20px" }}
          onClick={() => dispatch({ type: "INC" })}
        >
          +
        </Button>
        <Button
          className="px-5 py-2 btn-secondary"
          onClick={() => dispatch({ type: "DNC" })}
        >
          -
        </Button>
      </div>
      <Divider className="text-warning">UseReducer</Divider>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default UseReducer;
