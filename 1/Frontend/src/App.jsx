import { Route, Routes, BrowserRouter, Router } from 'react-router-dom'
import './App.css'
import { Login } from './Auth/Login'
import { Register } from './Auth/Register'
import AddBook from './Components/AddBook'
import AddStaff from './Components/AddStaff'
import HelloUser from './Components/HelloUser'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/addbook' element={<AddBook  />} />
      <Route path='/addstaff' element={<AddStaff  />} />
      <Route path='/hello' element={<HelloUser  />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
