import React, { useState } from "react";

const ShortCircuitEval = () => {
  const [demo, setDemo] = useState("ShortCircuitEval");
  return (
    <>
      <h2 className="h1">{demo || "thapa"}</h2>
      <h1 className="h2">Hello {demo && "ShortCircuitEval"}</h1>
    </>
  );
};

export default ShortCircuitEval;
// $$  ||
