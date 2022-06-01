import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer } from '../../components'
import DetailCagar from '../DetailCagar'
import Home from '../Home'

const MainApp = () => {
  return (
    <div>
        <Header />
        <Router>
            <Switch>
                <Route path="/detail-cagar">
                    <DetailCagar />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
        <Footer />
    </div>
  )
}

export default MainApp