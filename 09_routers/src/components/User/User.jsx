import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {userId} = useParams()
  return (
    <div>
      User is : {userId}
    </div>
  )
}

export default User
