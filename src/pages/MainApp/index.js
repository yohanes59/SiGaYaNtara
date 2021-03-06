import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer, About, Teams } from '../../components'
import SkipLink from '../../components/atoms/SkipLink'
import Home from '../Home'
import CagarBudaya from '../CagarBudaya'
import DetailCagar from '../DetailCagar'
import Upload from '../Upload'
import Edit from '../Edit'

const MainApp = (props) => {
    return (
        <main>
            <SkipLink />
            <Header user={props.user} />
            <Router>
                <Switch>
                    <Route path="/upload">
                        <Upload user={props.user} />
                    </Route>
                    <Route path="/edit/:id">
                        <Edit user={props.user} />
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
        </main>
    )
}

export default MainApp