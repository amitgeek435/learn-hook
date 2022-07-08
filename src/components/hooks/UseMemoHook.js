import React, { useState, useMemo } from "react";
import { Divider } from "antd";
import { Button } from "react-bootstrap";

function UseMemoHook() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1 = () => {
    setCount1((prevState) => prevState + 1);
  };
  const handleCount2 = () => {
    setCount2((prevState) => prevState + 1);
  };

  //   const isEven = () => {
  //     console.log("call count 1");
  //     return count1 % 2 === 0;
  //   };

  const isEven = useMemo(() => {
    // console.log("use memo with callback");
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <>
      <Divider className="text-info">Start UseMemo</Divider>
      <div className="text-center">
        <span className="text-secondary h2 my-3 shadow">Learn UseMemoHook</span>
        <p className="text-secondary h4 my-0 ">
          Count-1: {count1} This Is {isEven ? "even" : "odd"} Number
        </p>
        <p className="text-secondary h4 my-0 ">Count-2: {count2}</p>
        <Button className="mx-2" onClick={handleCount1}>
          Inc 1
        </Button>
        <Button onClick={handleCount2}>Inc 2</Button>
      </div>
      <Divider className="text-info">End UseMemo</Divider>
    </>
  );
}

export default UseMemoHook;
