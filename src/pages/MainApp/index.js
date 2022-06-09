import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer, About, Teams } from '../../components'
import DetailCagar from '../DetailCagar'
import Home from '../Home'
import CagarBudaya from '../CagarBudaya'
import Unggah from '../Unggah'
import Ubah from '../Ubah'

const MainApp = (props) => {
  return (
    <div>
        <Header user={props.user} />
        <Router>
            <Switch>
                <Route path="/upload">
                    <Unggah user={props.user} />
                </Route>
                <Route path="/edit/:id">
                    <Ubah user={props.user} />
                </Route>
                <Route path="/detail/:id" > 
                    <DetailCagar />
                </Route>
                <Route path="/cagar">
                    <CagarBudaya />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                    <Teams />
                </Route>
            </Switch>
        </Router>
        <Footer />
    </div>
  )
}

export default MainApp