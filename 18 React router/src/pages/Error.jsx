import { useNavigate } from 'react-router-dom';


const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem"
}

const Error = () => {

  const navigate = useNavigate();

  return (
    <div style={style}>
      <h1>Error 404! Page Not Found</h1>
      <button onClick={() => navigate("/")} >Go to Home</button>
    </div>
  )
}

export default Error