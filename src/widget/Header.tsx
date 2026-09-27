import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div>
        <header>
            <NavLink to= "/home" >Home sahifasi</NavLink>
        </header>
    </div>
  )
}

export default Header