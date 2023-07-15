import { useReducer } from "react";
import "./App.css";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    default:
      return state;
  }
};

const App = () => {
  const [count, displatch] = useReducer(reducer, initialState);

  return (
    <>
    <h1>{count}</h1>
    <div style={{ display: "flex", gap: "1rem" }}>
      <button onClick={() => displatch("Increment")} >Increment</button>
      <button onClick={() => displatch("Decrement")} >Decrement</button>
    </div>
    </>
  );
};

export default App;
