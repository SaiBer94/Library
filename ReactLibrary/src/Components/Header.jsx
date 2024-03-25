import React from 'react'
import Button from './Button'


function Header() {
  return (
    <div className='Navbar'>
      <Button text={"Users"} route={"/Users"}/>
      <Button text={"Register Book/User"} route={"/Register"}/>
      <Button text={"Delete Book/User"} route={"/DeleteUser"}/>
      <Button text={"Home"} route={"/Home"}/>      
    </div>
  )
}

export default Header
