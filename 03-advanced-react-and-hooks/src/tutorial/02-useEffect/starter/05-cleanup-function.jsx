import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // some logic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h2>The Random Component</h2>;
};

export default CleanupFunction;
