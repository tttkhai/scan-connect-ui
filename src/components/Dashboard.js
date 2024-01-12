import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'

function Dashboard() {
  const [ user, setUser ] = useState({})
  const getUser = (body) => {
    const { data } = api().post('/user', body)

    setUser(data)
  }

  useEffect(()=> {
    getUser();
  })

  return (
    <div>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>{user.qrPath}</div>
    </div>
  )
}

export default Dashboard