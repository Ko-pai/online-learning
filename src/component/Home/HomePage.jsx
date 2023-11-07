import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const HomePage = () => {
    const [value , setValue] = useState(false)

  return (
    <div className='good' style={{ width : "100vw"  ,display : "flex" , flexDirection : "column"}}>
      <NavBar check={true} setClick={setValue} click={value}/>
    </div>
  )
}

export default HomePage