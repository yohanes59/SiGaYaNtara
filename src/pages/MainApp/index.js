import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer, Tentang, TimItem } from '../../components'
import { Foto } from "../../assets";
import DetailCagar from '../DetailCagar'
import Home from '../Home'
import CagarBudaya from '../CagarBudaya'
import Unggah from '../Unggah'
import Ubah from '../Ubah'
import Profile from '../Profile';

const MainApp = (props) => {
  return (
    <div>
        <Header user={props.user} />
        <Router>
            <Switch>
                <Route path="/profile">
                    <Profile user={props.user} />
                </Route>
                <Route path="/upload">
                    <Unggah user={props.user} />
                </Route>
                <Route path="/edit">
                    <Ubah user={props.user} />
                </Route>
                <Route path="/detail-cagar">
                    <DetailCagar user={props.user} />
                </Route>
                <Route path="/cagar">
                    <CagarBudaya />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <Tentang />
                    <TimItem nama="shandra elvyra s.p." section="front-end" src={Foto} />
                    <TimItem nama="nilam setyo ningrum" section="front-end" src={Foto} />
                    <TimItem nama="yohanes cahyadi" section="back-end" src={Foto} />
                    <TimItem nama="darian gunawan" section="back-end" src={Foto} />
                </Route>
            </Switch>
        </Router>
        <Footer />
    </div>
  )
}

export default MainApp