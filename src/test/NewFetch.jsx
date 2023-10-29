import React from 'react'
import { useState } from 'react'
import "./newFetch.scss"

import axios from 'axios'
//import Successful from './Successful'

const NewFetch = ({ name, title, handleChange }) => {
  // const [userName, setUserName] = useState()
   const [takeName, setTakeName] = useState()
  // const [takeEmail, setTakeEmail] = useState()
  const url = 'http://localhost:1500/signIn/create'
  const [data,setData] = useState({
    name : "",
    email : "",
    password : ""
    
  })

  function submit(e){
    e.preventDefault();

    axios.post(url,{
      name : data.name,
      email : data.email,
      password : data.password
    })
    .then(res =>{
      if(res.data === "Sign in successfully"){
        setTakeName(res.data)
      }else{
        setTakeName(res.data)
      }
    })

  }

  function clickHandler(e) {
        const newUserData = { ...data }
        newUserData[e.target.id] = e.target.value
        setData(newUserData)
        console.log(newUserData);
  }

  

  return (
    <div>
      <h2>{title}</h2>
       <form onSubmit={(e) => submit(e)}>
       <input
          id ="name"
          type="text"
          value={data.name}
          onChange={(e) => clickHandler(e)}
          placeholder='Username'
        /> <br />
 
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => clickHandler(e)}
          placeholder='Email'
        /> <br />

        <input
          id="password"
          type="password"
          value={data.password}
          onChange={(e) => clickHandler(e)}
          placeholder='Password'
        /> <br />
        <button>Sign In</button>
       </form>
     
     <div className='successText'>{takeName}</div>
    </div>
  )
}

export default NewFetch

//Show user data
/* 

const job = name.filter(user => user.name === takeName)


    This loop is for take data from api 
    
    for (let i = 0; i < job.length; i++) {
      const element = job[i];
      if (element.name === takeName  && element.email === takeEmail) {
       return setUserName(true)
      }else{
        return setUserName(false)
      }
    }




     <button onClick={clickHandlerForName}>Sign In</button>

      <h1 className={!userName ? "open" : "close"} >Not Successful</h1> 
      {
        userName ? <Successful/> :
        null
      }
*/


