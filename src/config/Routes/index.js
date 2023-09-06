import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";

const Routes = () => {
    const [authUser, setAuthUser] = useState();

    useEffect(() => {
        const getAuth = async () => {
            const res = await axios.get('https://si-gayantara-api.vercel.app/v1/auth/user', {
                withCredentials: true,
            });

            const user = res.data;
            setAuthUser(user);
        };
        getAuth();
    })
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login user={authUser} />
                </Route>
                <Route path="/register">
                    <Register user={authUser} />
                </Route>
                <Route path="/">
                    <MainApp user={authUser} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;