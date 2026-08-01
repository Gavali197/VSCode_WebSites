import React, { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";

const UserInterface = () => {
  const { id } = useParams();
  const [user, setuser] = useState(null); // Set initial state to null
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v2/userlist/${id}`)
      .then((res) => res.json())
      .then((data) => setuser(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Id : {user._id}</p>
      <p>Name: {user.name}</p>
      <p>DOB : {user.dateOfBrith}</p>
      <p>email : {user.email}</p>
      <p>Password : {user.password}</p>
      <p>Gender : {user.Gender}</p>

        {/* Remeber everytime when you want to back one step use this */}
      <button onClick={() => navigate(-1)}>Back to List</button>
    </div>
  );
};

export default UserInterface;
