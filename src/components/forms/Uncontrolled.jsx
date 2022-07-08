import React, { useRef, useState } from "react";
import Card from "antd/lib/card/Card";
import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FormLabel } from "react-bootstrap";

const Uncontrolled = () => {
  const lnum = useRef(null);
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNum = lnum.current.input.value;
    newNum === "" ? alert("Enter Num...") : setShow(true);
    setShow(newNum);
  };
  return (
    <div className="site-card-border-less-wrapper">
      <form action="" onSubmit={handleSubmit}>
        <Card title="Enter Your Lucky Number" bordered={false}>
          <FormLabel className="text-success" htmlFor="num">
            Lucky Number
          </FormLabel>
          <Input
            className="w-50 mx-5"
            size="default"
            placeholder="Enter num"
            prefix={<UserOutlined />}
            id="num"
            ref={lnum}
          />
          <Button htmlType="submit" type="primary" size="small" shape="round">
            Click Here
          </Button>
          {show ? (
            <p className="h4 mt-5 text-dark">{`Lucky Num Is: ${lnum.current.input.value}`}</p>
          ) : (
            ""
          )}
        </Card>
      </form>
    </div>
  );
};

export default Uncontrolled;
