import React, { useEffect, useState } from 'react'

const UserList = () => {
    const API = "http://localhost:4000/api/v2/userlist"

    const [data, setdata] = useState([]);

    const GetData = async() =>{
    try{
        const res = await fetch(API);
      const result = await res.json();
      setdata(result);
    
    }catch(err){
      console.error(err);
    }
    }

    useEffect(()=>{
      GetData();
    }, [])
  return (
    <div>
        <h1>all Users</h1>
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>DateOfBrith</th>
              <th>Email</th>
              <th>password</th>
              <th>Gender</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index)=>(
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.dateOfBrith}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.Gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default UserList