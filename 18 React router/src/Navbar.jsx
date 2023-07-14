import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <h2>ReactRouter</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar