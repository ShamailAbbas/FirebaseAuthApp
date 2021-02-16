import { React, useState } from 'react'
import './css/login.css'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './Firebase'

const Login = ({ email, dispatch }) => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const history = useHistory()

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }
  const handlelogin = async () => {
    try {
      await login(Email, Password)
      dispatch({
        type: 'SIGNUP',
        payload: { email: Email, password: Password },
      })
      history.replace('/Dashboard')
      window.location.reload()
      console.log('logged in successfully')
    } catch {
      console.log('could not log in due to some error')
    }
  }
  return (
    <div>
      <div className='loginpage'>
        <div className='formcontainer'>
          <form>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to='/signup' className='signup'>
              SignUp
            </Link>
          </form>
          <button
            className='btn'
            onClick={() => {
              handlelogin()
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
const mapStatetoProps = (state) => {
  return {
    email: state.email,
  }
}

export default connect(mapStatetoProps)(Login)
