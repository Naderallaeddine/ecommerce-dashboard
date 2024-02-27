import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Header from './Header'

function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
 
  useEffect( ()=>{
    
    if(localStorage.getItem('user-info'))
    {
        navigate('/add');
    }
  },[navigate])

    async function signUp(){
      let item={name,email,password};
      
      let result=await fetch("http://127.0.0.1:8000/api/register",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      });
      result=await result.json();
      localStorage.setItem("user-info",JSON.stringify(result));
      navigate('/add');

  }

  return (
    <div>
      <Header/>
    <div className='col-md-4 offest-sm-3 form'>
      <h1>Register</h1>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder='name'/>
      <br/>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='email'/>
      <br/>
      <input type='password'value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder='paswword'/>
      <br/>
      <button onClick={signUp} className='btn btn-primary'>Sign Up</button>
    </div>
    </div>
  )
}

export default Register