import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'

function Profile() {
  const [ profile, setProfile ] = useState({})
  const getUserDetails = (id) => {
    const { data } = api().get(`/user/${id}`)

    setProfile(data)
  }

  useEffect(()=> {
    getUserDetails();
  })

  return (
    <div>
      <div>{profile.firstName}</div>
      <div>{profile.lastName}</div>
      <div>{profile.phoneNumber}</div>
    </div>
  )
}

export default Profile