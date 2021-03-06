import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import UiUx from './pages/UiUx';
import Android from './pages/Android';
import Development from './pages/Development';
import Design from './pages/Design';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

import './scss/style.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    
                    <Header />
                    <Switch>
                        <Route exact path="/" render={({ location }) => {
                            return !location.search ? <Home /> : <NotFound />;
                        }} />
                        <Route exact path="/ui-ux" component={UiUx} />
                        <Route exact path="/android" component={Android} />
                        <Route exact path="/development" component={Development} />
                        <Route exact path="/design" component={Design} />
                        <Route exact path="/legal" component={Legal} />
                        <Route component={NotFound} status={404} />
                    </Switch>
                    <Footer />
                    
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
