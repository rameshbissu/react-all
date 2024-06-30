import React from "react";

const UseStateGotcha = () => {
  const [value, setValue] = React.useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("clicked button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
