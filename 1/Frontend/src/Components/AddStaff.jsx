import React from 'react'
import { useState } from 'react'

const AddStaff = () => {
    const [form, setform] = useState({
        Name :"",
        Salary :"",
        Age :"",
        Phone :""
    });

    const [error, seterror] = useState("");

    const handleOnchange = (e)=>{
      const {name, value} = e.target;
      setform({...form, [name]:value});
    };

    const handleFormSubmit = async(e)=>{

      e.preventDefault();

      if(!form.Name || !form.Phone || !form.Salary || !form.Age){
        seterror("Fill all detailed")
      }

      const API = "http://localhost:4000/api/v2"

      try{
        const res = await fetch(`${API}/staffpost`, {
          method:"POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(form)
        });


        const data = await res.json();

        if(!res.ok){
          seterror(data.message);
          return;
        }

        alert("Successfully");  
      }catch(err){
        seterror(err, "error from handler form");
      }
    }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        name: <input type="text" value={form.Name} name='Name' onChange={handleOnchange} />
        Salary : <input type="text" value={form.Salary } name='Salary' onChange={handleOnchange} />
        Age : <input type="text" value={form.Age} name='Age' onChange={handleOnchange} />
        Phone : <input type="text" value={form.Phone} name='Phone' onChange={handleOnchange} />

        <button type='submit'>Add staff</button>
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </div>
  )
}

export default AddStaff