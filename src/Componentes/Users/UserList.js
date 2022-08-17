import React from 'react'
import Card from '../UI/Card'
import '../styles/users.css'

const UserList = (props) => {
  return (
    <Card>
      <ul className='ul-list'>
        {props.users.map((user) => (
          <li className='li-list' key={user.id}>
            {user.name}, ({user.age} years old) 
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserList