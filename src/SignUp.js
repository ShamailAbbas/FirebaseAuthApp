import { React, useState } from 'react'
import './css/login.css'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { auth, db } from './Firebase'
const SignUp = ({ dispatch }) => {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const history = useHistory()

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  const handlesignup = async () => {
    try {
      await signup(Email, Password)

      dispatch({
        type: 'SIGNUP',
        payload: { name: Name, email: Email, password: Password },
      })
      history.replace('/')

      db.collection('users')
        .doc(Email)
        .collection('userinfo')
        .doc('credentials')
        .set({
          email: Email,
          password: Password,
          role: 'User',
        })
      db.collection('Allusers').doc(Email).set({
        email: Email,
        password: Password,
        role: 'User',
      })

      console.log('Congrats !!! signup successfully')
    } catch {
      console.log('OHHH !!!! could not signup ')
    }
  }
  return (
    <div>
      <div className='loginpage'>
        <div className='formcontainer'>
          <form>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              onChange={(e) => setName(e.target.value)}
            />
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
          </form>
          <button
            type='submit'
            className='btn'
            onClick={() => {
              handlesignup()
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
const mapStatetoProps = (state) => {
  return {
    state: state,
  }
}

export default connect(mapStatetoProps)(SignUp)
