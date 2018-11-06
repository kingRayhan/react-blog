import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default class Article extends Component {
    state = {
        user: null,
    }

    componentWillMount() {
        Axios.get(
            `https://jsonplaceholder.typicode.com/users/${
                this.props.post.userId
            }`
        ).then(d => {
            this.setState({ user: d.data })
        })
        // console.log('componentWillMount')
    }

    render() {
        // console.log('render')
        const { post } = this.props
        return (
            <article key={post.id}>
                <h1>
                    <Link to={`/postid/${post.id}`}>{post.title}</Link>
                </h1>
                <div className="user">
                    {this.state.user ? (
                        <Link to={`/userid/${this.state.user.id}`}>
                            {this.state.user.name}
                        </Link>
                    ) : null}
                </div>
                <p>{post.body}</p>
                <Link to={`/postid/${post.id}`}>Details</Link>
            </article>
        )
    }
}
