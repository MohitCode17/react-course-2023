import './App.css'

export default function App() {

  const handleClick = () => alert('You clicked me!');
  // const mouseOver = () => alert('Mouse over');

  return (
    <div className="container">
      {/* <img src="https://picsum.photos/640/360" onMouseOver={mouseOver} /> */}
      <img src="https://picsum.photos/640/360"/>
      <button onClick={handleClick} >Click me</button>
    </div>
  )
};