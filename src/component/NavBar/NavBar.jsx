import React, { useEffect, useState } from 'react'
import './navBar.scss'
import logo from '../../assest/Logo.png'
import ListInNav from './list/ListInNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const NavBar = (prop) => {
  let { setClick, click, ea, check, user, tet } = prop
  

  const para = useParams()
  const testRef = useRef()
  const goTo = useNavigate()
  

   function handle (e){
     e.preventDefault()
    window.location.reload(true)

   }

   function logoutClick (){
      goTo("/online-learning/signIn")
   }

  return (
    <div className="container">
      <div className="left">
        <div className="logoAndName">
          <img src={logo} alt="logo.png" />
          <h1>Online Learning</h1>
        </div>
      </div>
      <div className="right">
        <ListInNav />
      </div>

      <div className="lastDiv">
        <div
          className={ea || check ? 'active' : 'profileIconContainer'}
          onClick={() => setClick(!click)}
        >
          <FontAwesomeIcon icon={faUser} className="userIcon" name="user" />
        </div>

        <div className={'dropBox ' + (click && 'undrop')}>
          <span className="good">{para.id}</span>
          <div className={click ? "home-box" : "close"} onClick={handle}>
            <FontAwesomeIcon icon={faHouse} className='ic'  ref={testRef}/>
            <p>Home</p>
          </div>
          <div className={click ? "home-box" : "close"} onClick={logoutClick}>
            <FontAwesomeIcon icon={faUser} className='ic'/>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
