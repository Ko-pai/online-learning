import React, {  useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios'
import "./login.scss"
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const [username ,setUsername] = useState(false)
  const [data ,setData] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [loginErrorText , setLoginErrorText] = useState(false)

  const [name,setName] = useState({})
  
  
  const navigate = useNavigate()

  const url = "http://192.168.0.105:1500/login"
  
  axios.post(url,({
    email : email,
    password : password
  }))
  .then(response => {
    // Handle the successful response here
    setData(response.data)
    
  })
  .catch(error => {
    // Handle any errors here
    console.error('An error occurred:', error);
  });

  function handle (e){
    e.preventDefault()
    //const job = data.filter(user => user.email === email)
    

    if(data === 'Wrong Email or Password'){
      setLoginErrorText(true)
      setName(data)
    }else{
      setLoginErrorText(false)
    }

    if(data.email === email && data.password === password){
      setUsername(true)
      navigate(`/online-learning/home/${data.name}`)
    }else{
      setUsername(false)
    }
    
  }

 
 
  
 

  return (
    <div>
        <NavBar tet ={username}  />
        <div className='form-container'>
          <form >
            <h2>Login</h2>
            <input type="text" name="email"  placeholder='Enter your email address' onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" name="password"  placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={(e) => handle(e)}>Login</button>
            <br />
            
            <p>{loginErrorText ? name : ''}</p> 
            {/* <h3>{username ? "Successfully" : "Not Successfully"}</h3> */}
          </form>
        </div>
    </div>
  )
}

export default Login