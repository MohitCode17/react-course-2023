import { useState } from "react";
import "./App.css";

const initialData = {
  name: "",
  email: "",
  message: "",
  employment: "",
  isFriendly: true,
};

function App() {
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email) {
      alert("Please fill the details");
      return;
    }
    alert(`Welcome ${data.name}!`);
    alert(`Please verify your email: ${data.email}`);
    console.log(data);
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setData((prevData) => ({ ...prevData, [name]: type === "checkbox" ? checked : value }));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          name="name"
          value={data.name}
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
          value={data.email}
        />
        <fieldset>
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={data.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={data.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={data.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <label htmlFor="isFriendly">Are you Friendly</label>
          <input
            type="checkbox"
            name="isFriendly"
            id="isFriendly"
            onChange={handleChange}
            checked={data.isFriendly}
          />
        </div>

        <textarea
          name="message"
          id="message"
          rows="3"
          placeholder="Write your message"
          onChange={handleChange}
          value={data.message}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
