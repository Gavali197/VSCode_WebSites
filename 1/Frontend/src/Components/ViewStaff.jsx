import React, { useEffect } from 'react'
import { useState } from 'react'


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