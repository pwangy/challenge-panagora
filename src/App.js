import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Products } from './components/products'
import { Product } from './components/product'
import { About } from './components/about'
import { Nav } from './components/nav'

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <p>hello, Pangora!</p>
        <Nav />


        <Switch>
        
          <Route exact path='/'>
            <Products />
          </Route>
          
          <Route exact path='/products/:slug'>
            <Product />
          </Route>
          
          <Route exact path='/about'>
            <About />
          </Route>

        </Switch>


      </div>
    </BrowserRouter>
  )
}
