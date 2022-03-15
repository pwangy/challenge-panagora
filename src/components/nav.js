import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
        <ul>
          <li>
            <NavLink exact
              to='/'
              className={isActive =>
                "nav-link" + (!isActive ? " unselected " : "")
              }
            >
            Products
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
    </nav>
  )
}