import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import configureStore from '../store/Store';
import Watch from './Pages/Watches/Watch'
import Home from '../views/Home/Home'
import FreePage from '../views/Pages/FreePage'
import ProPage from '../views/Pages/ProPage'
import OurAppPage from '../views/Pages/OurAppPage'
import {
    oldvergb, oldvergl,
    ss1js1free,
    ss1js1pro,
    ss1js2free,
    ss1js2pro,
    ss2js1free,
    ss2js1pro,
    ss2js2free,
    ss2js2pro, ss3js1pro, ss3js2free, ss3js2pro, ss4js1free, tutolanding,
} from "../views/Pages/CMS";

class Root extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            active: false,
            store: configureStore(() => this.setState({isLoading: false})),
        };
    }

    render() {
        if (this.state.isLoading) return <div>Loading...</div>;
        return (
            <Provider store={this.state.store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/free" component={FreePage}/>
                        <Route path="/pro" component={ProPage}/>
                        <Route path="/our-app" component={OurAppPage}/>
                        <Route path="/watch/:id" component={Watch}/>
                        <Route path="/ss1js1free" component={ss1js1free}/>
                        <Route path="/ss1js1pro" component={ss1js1pro}/>
                        <Route path="/ss1js2free" component={ss1js2free}/>
                        <Route path="/ss1js2pro" component={ss1js2pro}/>
                        <Route path="/ss2js1free" component={ss2js1free}/>
                        <Route path="/ss2js1pro" component={ss2js1pro}/>
                        <Route path="/ss2js2free" component={ss2js2free}/>
                        <Route path="/ss2js2pro" component={ss2js2pro}/>
                        <Route path="/ss3js1free" component={FreePage}/>
                        <Route path="/ss3js1pro" component={ss3js1pro}/>
                        <Route path="/ss3js2free" component={ss3js2free}/>
                        <Route path="/ss3js2pro" component={ss3js2pro}/>
                        <Route path="/ss4js1free" component={ss4js1free}/>
                        <Route path="/ss4js1pro" component={ss4js1free}/>
                        <Route path="/ss4js2free" component={ss4js1free}/>
                        <Route path="/ss4js2pro" component={ss4js1free}/>
                        <Route path="/spfree" component={ss4js1free}/>
                        <Route path="/sppro" component={ss4js1free}/>
                        <Route path="/oldvergb" component={oldvergb}/>
                        <Route path="/oldvergl" component={oldvergl}/>
                        <Route path="/tutolanding" component={tutolanding}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Root