import Book from "./Book"

// Style
let heading = {
  textAlign: "center",
  fontFamily: "cursive",
  margin: "2rem 0",
  fontSize: "2rem"
}

let style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
}

const Shop = () => {
  return (
    <section>
        <h1 style={heading}>Shop Books</h1>
        <div style={style}>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
        
    </section>
  )
}

export default Shop