import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../static/logo'

export const Header = () => {
  return (
    <article>
        <Link to='/'>
          <Logo />
        </Link>
    </article>
  )
}