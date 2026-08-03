import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [error, seterror] = useState("");

  const navigate = useNavigate();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  // const adminLogin = () => {
  //     if(!form.email === "Admin@gmail.com" || !form.password === "Admin@123"){
  //         return alert("admin not login")
  //     }else{
  //         navigate("/")
  //     }
  // }

  const handleForm = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      seterror("fill all field");
    }
    // http://localhost:5173/

    const API = "http://localhost:4000/api/v2/login";

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        seterror(data.message);
      }

      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form onSubmit={handleForm}>
        email
        <input
          type="text"
          value={form.email}
          name="email"
          onChange={handleOnchange}
        />
        password
        <input
          type="password"
          value={form.password}
          name="password"
          onChange={handleOnchange}
        />
        <div className="success-btn">
          <button type="submit">Login</button>
        </div>
        {error && <p style={{ color: "red" }}> {error}</p>}
      </form>
     \<Link to={"/register"}>New User</Link>
    </>
  );
};
