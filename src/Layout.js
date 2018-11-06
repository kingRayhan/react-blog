import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1 style={{ color: '#FFF' }}>React Blog</h1>
                </div>
                <div className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="body">{this.props.children}</div>
            </div>
        )
    }
}
