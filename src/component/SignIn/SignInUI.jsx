import React from 'react'
import { useState } from 'react'
import './newFetch.scss'
import './signInStyle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faGoogle, } from '@fortawesome/free-brands-svg-icons'


 import photo from '../../assest/Sign-up-form.png';
import icon from "../../assest/icons8-show.png"
import closeIcon from '../../assest/icons8-closed-eye.png'
import googleIcon from '../../assest/icons8-google.svg'
import facebookIcon from '../../assest/icons8-facebook.svg'

 

import axios from 'axios'
//import Successful from './Successful'

const NewFetch = ({ name, title, handleChange }) => {
  const [successText, setSuccessText] = useState()
  const [errorName, seterrorName] = useState()
  const [errorEmail, seterrorEmail] = useState()
  const [choice, setChoice] = useState()
  const [emailChoice, setEmailChoice] = useState()
  const [check, setCheck] = useState(false)
  const [sameError, setSameError] = useState()
  const [sameErrorText, setSameErrorText] = useState()

  const [eye,setEye] = useState(false)


  const [showp,setShowP] = useState()
  const [active,setActive] = useState(false)

  const url = 'http://localhost:1500/signIn/create'
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  //show password function
  
   

  function showPassword(e) {
    e.preventDefault()

    if (showp.type === "password") {
      showp.type = "text";
      setActive(true)
    } else {
      showp.type = "password";
      setActive(false)
    }
  }

  //this function is fetch data from api and produce error message
  function submit(e) {
    e.preventDefault()

    axios
      .post(url, {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.data === 'Sign up successfully') {
          setSuccessText(res.data)
          setCheck(true)
          setChoice(false)
          setSameError(false)
        }

        if (res.data === 'Username and email is already taken!') {
          setSameErrorText(res.data)
          setChoice(false)
          setEmailChoice(false)
          setSameError(true)
        }

        if (res.data === 'Name is already taken!') {
          seterrorName(res.data)
          setChoice(true)
          setSameError(false)
        } else {
          setChoice(false)
        }

        if (res.data === 'Email is already exists.') {
          seterrorEmail(res.data)
          setEmailChoice(true)
          console.log(errorEmail)
          setSameError(false)
        } else {
          setEmailChoice(false)
        }
      })
  }

  //check username and email from database
  function clickHandler(e) {
    const newUserData = { ...data }
    newUserData[e.target.id] = e.target.value

    if(e.target.value){
      setEye(true)
    }else{
      setEye(false)
    }
    setData(newUserData)
    console.log(newUserData)
  }

  //clear input value after sign in successful
  function backspaceClick(e) {
    if (e.key === 'Backspace') {
      setChoice(false)
      setEmailChoice(false)
    }
  }

  return (
    <div className="formContainer">


    {/* This is robot writing photo */}
      <div className="left">
        <img src={photo} alt="robot"  />
      </div>



      {/* this is for signIn form design */}
      <div className="right">
        <div className="signInForm">
          <div className="signInBox">
          <form onSubmit={(e) => submit(e)}>
            <h2>{title}</h2>
            <input
              id="name"
              type="text"
              value={check ? '' : data.name}
              onChange={(e) => clickHandler(e)}
              onKeyDown={(e) => backspaceClick(e)}
              placeholder="Username"
            />
            <p className={choice ? 'open' : 'close'}>{errorName}</p>
            <br />
            <input
              id="email"
              type="email"
              value={check ? '' : data.email}
              onChange={(e) => clickHandler(e)}
              onKeyDown={(e) => backspaceClick(e)}
              placeholder="Email"
            />
            <p className={emailChoice ? 'open' : 'close'}>{errorEmail}</p>
            <br />
            <div className='passwordBox'>
            <input
              id="password"
              type="password"
              value={check ? '' : data.password}
              onChange={(e) => clickHandler(e)}
              placeholder="Password"
              onClick={(e)=> setShowP(e.target)}
            />
            <span className='eye' style={eye ? {opacity : "1"}: {opacity :"0"} } onClick={showPassword}><img src={active ? icon : closeIcon} alt="icon"/></span>
            </div>
            <br />
            <button>Sign Up</button>
          </form>


          {/* This is appeared after checking signIn successfully   */}
          <div
            className="successText"
            style={sameError ? { color: '#F2CA19' } : { color: 'rgb(19, 187, 19)' }}
          >
            {!choice ? successText : ''}

            {sameError ? sameErrorText : ''} 
          </div>
          </div>

        <div className="or">
          <div className="line1 line"></div>
          <p className='orWith'>or with</p>
          <div className="line2 line"></div>
        </div>

          <div className='otherSocialConnect'>
            <div className='social1'>
              <img src={facebookIcon} alt="facebook" srcset="" />
              <p className='facebookText'>Facebook</p>
            </div>
            <div className='social2'>
              <img src={googleIcon} alt="googleIcon" />
              <p className='googleText'>Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFetch

//Show user data
/* 

const job = name.filter(user => user.name === errorName)


    This loop is for take data from api 
    
    for (let i = 0; i < job.length; i++) {
      const element = job[i];
      if (element.name === errorName  && element.email === errorEmail) {
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

//UI input

/*  



*/

//for sign in fetch

/* 



*/
