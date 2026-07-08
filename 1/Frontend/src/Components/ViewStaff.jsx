import React, { useEffect } from 'react'
import { useState } from 'react'

const ViewStaff = () => {
    const [select, setselect] = useState("");
    const [staff, setstaff] = useState([])
    const API = "http://localhost:4000/api/v2/staffpost"
    const getStaff = async () =>{
       try{
         const get = await fetch(API)
        const result = await res.json()
        setstaff(result)
       }catch(err){
        console.log(err);
        
       }
    }

    //handle event by user side 

    useEffect(()=>{
      getStaff();
    }, [])
  return (
    <div>
        <select value={select} onChange={(e)=> setselect(e.target.value)}>
            <option value="">Select Staff</option>
            {staff.map((item)=>(
                <option key={item._id} value={item}></option>
  ))}
        </select>
    </div>
  )
}

export default ViewStaff