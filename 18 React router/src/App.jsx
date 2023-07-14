import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Navbar from './Navbar'
import './App.css'
import MainHeader from './MainHeader'

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App