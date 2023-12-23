import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2> Hello World </h2>
      {!changedText ? (
        <Output text="Its good to see you" />
      ) : (
        <Output text="Changed!" />
      )}
      <button onClick={changeTextHandler}> Change Text! </button>
    </div>
  );
};

export default Greeting;
