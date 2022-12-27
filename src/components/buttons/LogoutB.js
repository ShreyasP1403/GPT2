import React from 'react'
import {auth} from '../firebase'

const LogoutB = () => {
    const signOut = () =>{
        signOut(auth)
    }
  return (
    <button onClick={() => auth.signOut()}>
        Logout
    </button>
  )
}

export default LogoutB