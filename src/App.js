import { React, useState } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import AdminDashboard from './AdminDashboard'
import Landingpage from './Landingpage'
import { Switch, Route, Redirect } from 'react-router-dom'
import SignUp from './SignUp'
import { db } from './Firebase'
const App = () => {
  const email = localStorage.email
  const [Role, setRole] = useState('')

  db.collection('users')
    .doc(email)
    .collection('userinfo')
    .get()
    .then((item) => {
      const items = item.docs.map((doc) => doc.data().role)
      setRole(items[0])
    })
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landingpage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route
          exact
          path='/Dashboard'
          component={email ? Dashboard : Landingpage}
        />
        <Route
          exact
          path='/AdminDashboard'
          component={Role === 'Admin' ? AdminDashboard : Landingpage}
        />
        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default App
