import { useRef, useState } from "react";

const LoginButtonClick = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    let updateCount = count + 1;
    console.log(`Clicked ${updateCount} times`);
    setCount(updateCount);
  };

  console.log("I rendered!");

  return <button onClick={handleCount}>Click me</button>;
};

export default LoginButtonClick;
