import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState(0);

  const incrementMessage = () => {
    setMessage(prevState => prevState + 1);
  }

  // Target the title of document using useEffect

  useEffect(() => {
    if(message <= 0){
      document.title = 'Notification'
    }else{
      document.title = `Notification (${message})`
    }
  });

  return (
    <div>
      <p>Reviced {message} {message > 1 ? 'messages' : 'message'}</p>
      <div className="btn">
        <button onClick={incrementMessage}>Click me</button>
        <button onClick={() => setMessage(0)}>Mark as read</button>
      </div>
    </div>
  )
}

export default App;