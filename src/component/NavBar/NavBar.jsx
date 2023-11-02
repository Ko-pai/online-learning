import React from 'react'
import "./navBar.scss"
import logo from '../../assest/Logo.png'
import ListInNav from './list/ListInNav'


const NavBar = () => {
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
    </div>
  )
}

export default NavBar