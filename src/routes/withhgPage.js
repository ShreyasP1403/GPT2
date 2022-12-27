import React from 'react'
import Withhg from '../components/withhg/Withhg'
import 

function withhgPage  ()  {
  return (
    
    <switch>
      <Route exact path = "/" compound = {Withhg} />
      <Redirect to = "/"/>
    </switch>
  )
}

export default withhgPage