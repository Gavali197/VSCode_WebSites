import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserInterface = () => {
    const Id = useParams();
    const [user, setuser] = useState();

    useEffect(()=>{
        fetch(`http://localhost:5173/userlist/${id}`)
        .then((res)=> res.json())
        .then((data) => setuser(data))
        .catch((err)=> console.error(err))
    }, [Id])


  return (
    <div>
        <h2>User Profile</h2>
        <p>Id : {user._id}</p>
        <p>Name: {user.name}</p>
        <p>DOB : {user.dateOfBrith}</p>
        <p>email : {user.email}</p>
        <p>Password : {user.password}</p>
        <p>Gender : {user.Gender}</p>
        
    </div>
  )
}

export default UserInterface