import { useRef } from 'react'
//import home  from './home'
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
            <fieldset>
            <h1>sign up</h1>
        <p id='p1'>first sign up here</p>
                <div className='container'>
  <div className='input-space'>
    <p>Name</p>
        <input placeholder='name' type='text' ref={name}></input>

  </div>
  <div className='input-space'>
    <p>Email</p>
    <input placeholder='email' type='text' ref={email}></input>

  </div>
  <div className='input-space'>
    <p>Enter password</p>
    <input placeholder='password' type='password' ref={password}></input>

  </div>
  <div>
<div className='check'>

<div>
    <input type="checkbox" id='idd' /></div><div><p>remember me
    by creating account you agree terms and conditions!
</p></div>
</div>

  <button  onClick={handleClick}>sign up</button>
  </div>
  </div>
  
  </fieldset>   
  </div>     
     
  );
}

export default signup;
