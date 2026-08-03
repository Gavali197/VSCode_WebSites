import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import AddBook from "./Components/AddBook";
import AddStaff from "./Components/AddStaff";
import HelloUser from "./Components/HelloUser";
import UserList from "./Components/UserList";
import UserInterface from "./Components/UserInterface";
import ProtectRoute from "./Auth/ProtectRoute";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectRoute />}>
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/addstaff" element={<AddStaff />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/userlist/:id" element={<UserInterface />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
