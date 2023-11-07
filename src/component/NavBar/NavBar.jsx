import React, { useState } from 'react'
import "./navBar.scss"
import logo from '../../assest/Logo.png'
import ListInNav from './list/ListInNav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser }  from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import { useParams } from 'react-router-dom'




const NavBar = (prop) => {
  
  let { setClick , click , ea , check  , username } = prop


  function handle (e){
    e.preventDefault()
    if(e.type === "click"){
      setClick(true)
    }else{
      setClick(false)
    }
    
  }

  return (
    <div className='container'>
      <div className="left">
        <div className="logoAndName">
          <img src={logo} alt="logo.png" />
          <h1>Online Learning</h1>
        </div>
      </div>
      <div className="right">
        <ListInNav />
      </div>


     <div className='lastDiv'>
      <div onClick={() => setClick(!click)} className={ea || check ?  'active' : 'profileIconContainer'}  >
        <FontAwesomeIcon icon={faUser} className='userIcon' name='user'/>
      </div>     
      <span> {username} </span>
     </div>
      <div className={"dropBox " + ( click && "undrop")}>
    </div> 

    
    </div>
  )
}

export default NavBar