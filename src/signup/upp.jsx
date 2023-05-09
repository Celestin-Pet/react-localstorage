/*import { useRef } from 'react'
import home  from './home'
import './App.css'

function signup() {
  const name =useRef()
  const email =useRef()
  const password= useRef()

  const handleClick=()=>{
    if(email.current.value&&name.current.value&&password.current.value){
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signup",email.current.value)
         alert("an account created!!")
    }
  }
  
  return (
          <div>
<div className='container'>
  <div className='input-space'>
    <input placeholder='name' type='text' ref={name}></input>

  </div>
  <div className='input-space'>
    <input placeholder='email' type='text' ref={email}></input>

  </div>
  <div className='input-space'>
    <input placeholder='password' type='password' ref={password}></input>

  </div>
  <button  onClick={handleClick}>sign up</button>
  </div>   
  </div>     
        
  );
}

export default signup;
*/