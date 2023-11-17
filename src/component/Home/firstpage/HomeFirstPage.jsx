import React from 'react'
import './firstpage.scss'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandPointRight}  from '@fortawesome/free-regular-svg-icons'
import pic from '../../../assest/Component 6.png'

const HomeFirstPage = () => {
  const para = useParams()

  return (
    <div className="firstPageContainer">
      <div className="left">
        <div className="header-text">
          <h1>
            Language Mastery Made Simple: Explore Korean, Japanese, and English
            for Free!
          </h1>

          <p>
            Embark on a personalized language-learning journey with our expertly
            crafted lessons, meticulously designed to accelerate your
            proficiency. Test your skills with our challenging assessments,
            ensuring a comprehensive and effective path to fluency awaits you.
          </p>

          <button>Let's Learn</button>
        </div>
        <div className="imageTest">
          <img src={pic}/>
        </div>
      </div>
      <div className="right">

      <div className='choose-language-box'>
       <div className="text-container">
          <h3>Which language do you want to learn <i>{para.id}</i> ?</h3>
          <div className='language-buttons'>
                <div className='korean-button-box'>
                <FontAwesomeIcon icon={faHandPointRight} className='handIcon'/>
                <button>Korean</button>
                </div>
                <div className='english-button-box'>
                <FontAwesomeIcon icon={faHandPointRight} className='handIcon'/>
                <button>English</button>
                </div>
          </div>

       </div>

      </div>

      </div>
    </div>
  )
}

export default HomeFirstPage
