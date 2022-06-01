import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer } from '../../components'
import DetailCagar from '../DetailCagar'
import Home from '../Home'
import CagarBudaya from '../CagarBudaya'
import Unggah from '../Unggah'
import Ubah from '../Ubah'


const MainApp = () => {
  return (
    <div>
        <Header />
        <Router>
            <Switch>
                <Route path="/cagar">
                    <CagarBudaya />
                </Route>
                <Route path="/detail-cagar">
                    <DetailCagar />
                </Route>
                <Route path="/upload">
                    <Unggah />
                </Route>
                <Route path="/edit">
                    <Ubah />
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