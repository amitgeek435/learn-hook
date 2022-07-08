import { Button } from "react-bootstrap";
import React, { useCallback, useState } from "react";
import ToDo from "./ToDo";
import { PlusCircleOutlined } from "@ant-design/icons";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(["todo1", "todo2"]);
  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  const addNewTodo = useCallback(() => {
    // console.log("prop todo call...");
  }, [todo]);

  return (
    <div className="bg-info text-center">
      <p className="h3 pt-3">Learn UseCallback</p>
      <ToDo todo={todo} addNewTodo={addNewTodo} />
      <p className="mb-0">Count is : {count}</p>
      <Button className="mb-5" onClick={handleClick}>
        <PlusCircleOutlined />
      </Button>
    </div>
  );
};

export default UseCallbackHook;
