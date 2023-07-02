import { useState } from "react";
import "./App.css";

const App = () => {
  const [contact, setContact] = useState({
    firstName: "Mohit",
    lastName: "Gupta",
    phone: 9898989898,
    mail: "m@gmail.com",
    isFav: false,
  });

  const starIcon = contact.isFav
    ? `./images/star-filled.png`
    : `./images/star-empty.png`;


  /**
   * Challenge: Toggle star icon
   * from filled to empty and back and forth.
   */
  
  const toggleStarIcon = () => {
    setContact(prevState => (
      {
        ...prevState,
        isFav: !prevState.isFav
      }
    ))
  };

  return (
    <main>
      <article className="card">
        <img src="./images/user.png" className="card--image" />
        <div className="card--info">
          <img src={starIcon} className="card--favorite" onClick={toggleStarIcon} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.mail}</p>
        </div>
      </article>
    </main>
  );
};

export default App;
