import { React, useState, useEffect } from 'react'
import { db } from './Firebase'
import Users from './users'
const AdminDashboard = () => {
  const [User, setUser] = useState([])
  useEffect(() => {
    db.collection('Allusers').onSnapshot((snapshot) =>
      setUser(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
    )
  }, [])

  return (
    <div>
      <h1>Well Come to Admin Dashboard</h1>
      <div>
        {User.map((items, ind) => {
          return <Users key={ind} items={items.data} />
        })}
      </div>
    </div>
  )
}

export default AdminDashboard
