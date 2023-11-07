import React from 'react'

import Learning from '../Language/Learning'
import NewFetch from './SignInUI'


const SignUpMainUI = () => {
  return (
    <div className='signUpPage' style={{overflow : "hidden"}}>
        
        <NewFetch/>
        <Learning />
        
        <Learning />
    </div>
  )
}

export default SignUpMainUI