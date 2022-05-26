import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from '../../components'
import Home from '../Home'

const MainApp = () => {
  return (
    <div>
        <p>Header</p>
        <Router>
            <Switch>
                <Route>
                    <Route path="/">
                        <Home />
                    </Route> 
                </Route>
            </Switch>
        </Router>
        <Footer />
    </div>
  )
}

export default MainApp