import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import HomeFirstPage from './firstpage/HomeFirstPage';

const HomePage = () => {
    const [value , setValue] = useState(false)

  return (
    <div className='good' style={{ width : "100vw" , height :"100vh" ,display: "flex", flexDirection : "column",justifyContent :"end" }}>
      <NavBar check={true} setClick={setValue} click={value}/>
      <HomeFirstPage />
    </div>
  )
}

export default HomePage