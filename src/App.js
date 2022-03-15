import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Products } from './components/products'
import { Product } from './components/product'
import { About } from './components/about'
import { Header } from './components/header'
import { Nav } from './components/nav'

export const App = () => {
  return (
    <Router>
      <div className='wrapper'>
        <Header />
        <Nav />
        <Switch>
          <Route exact path='/'><Products /></Route>
          <Route exact path='/products/:slug'><Product /></Route>
          <Route exact path='/about'><About /></Route>
        </Switch>
      </div>
    </Router>
  )
}