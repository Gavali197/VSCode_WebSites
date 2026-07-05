import { Route, Routes, BrowserRouter, Router } from 'react-router-dom'
import './App.css'
import { Login } from './Auth/Login'
import { Register } from './Auth/Register'
import AddBook from './Components/AddBook'
import AddStaff from './Components/AddStaff'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/addbook' element={<AddBook  />} />
      <Route path='/addstaff' element={<AddStaff  />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
