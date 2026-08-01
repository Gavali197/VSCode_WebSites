import React, { useEffect, useState } from 'react'
import { redirect, useParams } from 'react-router-dom'

const UserInterface = () => {
    // 1. Destructure the exact parameter name you used in your App.js Route (e.g., /user/:id)
    const { id } = useParams(); 
    const [user, setuser] = useState(null); // Set initial state to null

    useEffect(() => {
        // 2. Point to your backend port (4000) and your single-user API route
        fetch(`http://localhost:4000/api/v2/userlist/${id}`) 
        .then((res) => res.json())
        .then((data) => setuser(data))
        .catch((err) => console.error(err))
    }, [id])

    // 3. Add a loading check! This prevents the "undefined" crash.
    if (!user) {
        return <div>Loading user data...</div>;
    }

    const handleBack = () =>{
        redirect("local")
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

        <div className="back">
            <button>Back</button>
        </div>
    </div>
  )
}

export default UserInterface