import { React, useEffect, useRef } from 'react'
import './css/Landingpage.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './Firebase'

const Landingpage = () => {
  const history = useHistory()
  const welcomeref = useRef('')
  const welllcomeref = useRef('')
  const logoutref = useRef('')
  const signinref = useRef('')
  const email = localStorage.email

  useEffect(() => {
    if (localStorage.length !== 0) {
      welcomeref.current.classList.add('display')
      welllcomeref.current.classList.add('display')
      signinref.current.classList.add('wellcome')
    }
  }, [])
  return (
    <>
      <div className='container'>
        <div className='nav'>
          <h3 className='wellcome' ref={welcomeref}>
            WelCome {email}
          </h3>
          <h3
            className='signin'
            ref={signinref}
            onClick={() => history.push('/Login')}
          >
            Sign In
          </h3>
          <h3
            className='logout'
            ref={welllcomeref}
            onClick={() => {
              localStorage.clear()
              window.location.reload()
            }}
          >
            Log Out
          </h3>
        </div>
      </div>
    </>
  )
}

export default Landingpage
