import React, { useEffect, useState } from 'react'
import NewFetch from './SignInUI'



const FetchApi = (props) => {
  let [name, setName] = useState()

  useEffect(() => {
    fetch('http://localhost:1500/signIn')
      .then((response) => response.json())
      .then((json) => setName(json))
  }, [])

  const handleChange = (event) => {
    event.preventDefault()

    const newUser = name.map((d) => {
      return d
    })

    setName(newUser)
  }

  return (
    <div>
        
    </div>
  )
}

export default FetchApi

/*
              <ul
              style={{ display: 'flex', flexDirection: 'column', listStyle: 'none' }}
            >
              <li key={id}>{name}</li>
              <li key={id}>{email}</li>
            </ul>
            */
