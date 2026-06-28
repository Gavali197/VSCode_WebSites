import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [form, setform] = useState({
        email :"",
        password :""
    })

    const [error, seterror] = useState("");
    // const navigate = useNavigate();

    const handleOnchange= (e)=>{
        const {name, value} = e.target;
        setform({...form, [name]:value})
    }

    const handleForm =(e)=>{
        if(!form.email || !form.password){
            seterror("fill all field")
        }
        
        // navigate("/dashboard");
    }
  return (
    <>
    <form onSubmit={handleForm}>
        email
        <input type="text" value={form.email} name='email' onChange={handleOnchange} />
        password 
        <input type="password" value={form.password} name='password' onChange={handleOnchange} />
        <div className="success-btn">
            <button type='submit'>Login</button>
        </div>
        {error && <p style={{color:"red"}}> {error}</p>}
    </form>
    </>
)
}
