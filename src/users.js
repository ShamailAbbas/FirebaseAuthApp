import React from 'react'
import './css/users.css'
const Users = ({ items }) => {
  console.log(items)
  return (
    <>
      <div className='usercontainer'>
        <div>{items.email}</div>
        <div>{items.password}</div>
        <div>{items.role}</div>
      </div>
    </>
  )
}

export default Users
