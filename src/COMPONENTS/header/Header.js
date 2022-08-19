import React from 'react'
import User from "../../IMAGES/User.svg"
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
  return (
    <header className='relative block w-full'>
      <nav className='logo-header'>
          <ul className='nav_list'>
            <li>
            <Link to="/">
            Movie App
              </Link>
            </li>

            <li>
           <Link to="/">
           <img src= {User} alt = "user" className='max-w-full'/>
           </Link> 
            </li>

          </ul>
            
      </nav>
    </header>
  )
}

export default Header