const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
          <img src="./images/logo.png" alt="titan-brand-logo" width={130} />
        </div>

        <ul className="items">
          <li className="item"><a href="#">Menu</a></li>
          <li className="item"><a href="#">Shoes</a></li>
          <li className="item"><a href="#">Our Brand</a></li>
          <li className="item"><a href="#">Contact</a></li>
        </ul>

        <button className="btn">Sign up</button>
    </nav>
  )
}

export default Navbar