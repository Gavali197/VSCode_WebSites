import { Route, Routes, BrowserRouter, Router } from 'react-router-dom'
import './App.css'
import { Login } from './Auth/Login'
import { Register } from './Auth/Register'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
