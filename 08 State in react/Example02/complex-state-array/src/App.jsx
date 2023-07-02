import { useState } from "react";
import "./App.css";

function App() {
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

  const things = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  const handleAddThings = () => {
    setThingsArray(prevState => (
      [...prevState, `Thing ${thingsArray.length + 1}`]
    ));
  };

  return (
    <div>
      <button onClick={handleAddThings}>Add Item</button>
      {/* Insert the things here*/}
      {things}
    </div>
  );
}

export default App;
