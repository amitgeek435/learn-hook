import { useState, useEffect } from "react";
import { Alert, Button, message } from "antd";
// import { cleanup } from "@testing-library/react";

const LearnuseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 0) {
      document.title = `Clicked count is ${count}`;
    } else {
      message.info("Not clicked");
    }
  }, [count]);

  //clean-up function
  const [wcontent, setWContent] = useState(window.screen.width);
  const actualWidth = () => {
    setWContent(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="container">
        <div className="text-center py-5 rounded shadow my-5">
          <p className="text-dark">
            <b>LearnuseEffect</b>
          </p>
          <Alert
            className="bg-light border-none"
            message="Clicked Count"
            description={count ? count : "0"}
          />
          {/* <p>{count}</p> */}
          <Button className="btn" onClick={handleCount}>
            Click Me
          </Button>
          <p className="pt-5 text-primary" style={{ fontSize: "20px" }}>
            Width:
          </p>
          <h1>{wcontent}</h1>
        </div>
      </div>
    </>
  );
};

export default LearnuseEffect;
