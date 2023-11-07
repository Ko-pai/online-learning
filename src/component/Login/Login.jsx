import React, {  useState } from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios'
import "./login.scss"
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [username ,setUsername] = useState()
  const [data ,setData] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const [name,setName] = useState('')
  
  
  const navigate = useNavigate()

  const url = "http://localhost:1500/signIn"
  
  axios.get(url)
  .then(response => {
    // Handle the successful response here
    setData(response.data.data)
  })
  .catch(error => {
    // Handle any errors here
    console.error('An error occurred:', error);
  });

  function handle (e){
    e.preventDefault()
    const job = data.filter(user => user.email === email)
    
    for (let i = 0; i < job.length; i++) {
      const element = job[i];
      if (element.password === password  && element.email === email) {
        setUsername(true)
        setName(element.name)
        setTimeout(()=>{
          navigate(`/home/${element._id}`)
        },1000)
      }else{
         setUsername(false)
      }
    }
  }
console.log(name);
  return (
    <div>
        <NavBar check ={username} username ={name}/>
        <div className='form-container'>
          <form >
            <h2>Login</h2>
            <input type="text" name="email"  placeholder='Enter your email address' onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" name="password"  placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={handle}>Login</button>
            <h3>{username ? "Successfully" : "Not Successfully"}</h3>
          </form>
        </div>
    </div>
  )
}

export default Login