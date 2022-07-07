import { useState, useEffect } from "react";
import { Button } from "antd";

const LearnuseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 0) {
      document.title = `Clicked count is ${count}`;
    }
  });
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="container">
        <div className="text-center py-5 bg-info rounded shadow mt-5">
          <p className="text-dark">
            <b>LearnuseEffect</b>
          </p>
          <p>{count}</p>
          <Button className="btn" onClick={handleCount}>
            Click Me
          </Button>
        </div>
      </div>
    </>
  );
};

export default LearnuseEffect;
