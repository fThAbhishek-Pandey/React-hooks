import React from "react";
import ChildB from "./childB";
const ChaildA = () => {
  return (
    <div className="A">
      <h3>I am child A</h3>
      <ChildB />
    </div>
  );
};

export default ChaildA;
