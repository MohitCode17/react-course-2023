import { useRef, useState } from "react";

const InputFocus = () => {
  const focusRef = useRef();
  const [name, setName] = useState("Mohit");

  const resetInputValue = () => {
    setName("");
    focusRef.current.focus();
  };

  console.log("I am render from input focus component");
  return (
    <div>
      <input
        ref={focusRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={resetInputValue}>Reset</button>
    </div>
  );
};

export default InputFocus;
