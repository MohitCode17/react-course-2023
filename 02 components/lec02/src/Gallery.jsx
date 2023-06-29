import Profile from "./Profile"

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

const Gallery = () => {
  return (
    <section>
        <h1 style={heading}>Animi Character</h1>
        <div style={style}>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
        </div>
        
    </section>
  )
}

export default Gallery