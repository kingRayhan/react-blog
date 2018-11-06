import React from 'react'
import ReactDOM from 'react-dom'
import './blog.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Single from './Single'
import User from './User'
import About from './About'
import Gallery from './Gallery'
import Users from './Users'
const NotFound = () => <h2>Not founded</h2>
const Test = () => <h2>Testing</h2>
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/postid/:id" component={Single} />
            <Route exact path="/userid/:userId" component={User} />
            <Route exact path="/about/" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/users" component={Users} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Router />, document.querySelector('#root'))
