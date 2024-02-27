import React from 'react'
import Header from './Header.js'
import { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      navigate('/add');
    }
  },[navigate])

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  async function login(){
    let item={email,password};
    
    let result=await fetch("http://127.0.0.1:8000/api/login",{
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
      <h1>Login</h1>
      <br/>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='email'/>
      <br/>
      <input type='password'value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder='paswword'/>
      <br/>
      <button onClick={login} className='btn btn-primary'>Login</button>
    </div>
    </div>
  )
}

export default Login