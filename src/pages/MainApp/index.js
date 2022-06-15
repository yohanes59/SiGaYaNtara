import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer, About, Teams } from '../../components'
import DetailCagar from '../DetailCagar'
import Home from '../Home'
import CagarBudaya from '../CagarBudaya'
import Unggah from '../Unggah'
import Ubah from '../Ubah'
import SkipLink from '../../components/atoms/SkipLink'

const MainApp = (props) => {
    return (
        <div>
            <SkipLink />
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
                        <DetailCagar user={props.user} />
                    </Route>
                    <Route path="/cagar">
                        <CagarBudaya user={props.user} />
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