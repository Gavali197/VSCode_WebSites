import React from "react";
// import { usenavigate } from "react-router-dom";
import { useState } from "react";

export const Register = () => {
  const [form, setform] = useState({
    username: "",
    Email: "",
    password: "",
    Gender: "",
    Dob: "",
    cpassword: "",
  });
  // const navigate = usenavigate();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleForm = (e) => {
    e.prevantDefault();

    if (
      !form.username ||
      !form.Email ||
      !form.password ||
      !form.Gender ||
      !form.Dob ||
      !form.cpassword
    ) {
      return seterror("Field is Empty");
    }
    if (form.username.length < 5) {
      return seterror("UserName must be at least 5 Char");
    }
    if (form.password.length < 6) {
      return seterror("Password must be at least 6 char");
    }
    if (!form.Email.includes("@") || form.Email.length < 3) {
      return seterror("Email is not Valid");
    }

    if (form.password != form.cpassword) {
      return seterror("password does not match");
    }

    seterror("");

    // navigate("/login");
  };

  const [error, seterror] = useState("");

  return (
    <>
      <form onSubmit={handleForm}>
        <div className="register-container">
          username
          <input
            type="text"
            value={form.username}
            onChange={handleOnchange}
            name="username"
            placeholder="enter username"
          />
          email
          <input
            type="text"
            value={form.Email}
            onChange={handleOnchange}
            name="Email"
            placeholder="enter email"
          />
          Gender
          <input
            type="text"
            value={form.Gender}
            onChange={handleOnchange}
            name="Gender"
            placeholder="enter gender"
          />
          dob
          <input
            type="text"
            value={form.Dob}
            onChange={handleOnchange}
            name="Dob"
            placeholder="enter dob"
          />
          password
          <input
            type="password"
            value={form.password}
            name="password"
            onChange={handleOnchange}
          />
          confim password
          <input
            type="password"
            value={form.cpassword}
            name="cpassword"
            onChange={handleOnchange}
          />
          <div className="success-btn">
            <button type="submit">Register</button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </>
  );
};
