import React from 'react'
import { Link, NavLink } from 'react/router-dom'

import Logo from '../static/panagora-logo.svg'

export const Nav = () => {

  return (
    <>
      <h1>
        <Link to='/'>
          <svg><use xlinkHref={Logo} height='200px' alt='Panagora logo' /></svg>
        </Link>
      </h1>

      <ul>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </>
  )
}