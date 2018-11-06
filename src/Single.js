import React, { Component } from 'react'
import Layout from './Layout'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Comments from './Comments'
import Loader from './Loader'

export default class Single extends Component {
    state = { post: null, comments: [], user: null, loading: true }
    componentWillMount() {
        const post = axios.get(
            `https://jsonplaceholder.typicode.com/posts/${
                this.props.match.params.id
            }`
        )
        const comments = axios.get(
            `https://jsonplaceholder.typicode.com/comments?postId=${
                this.props.match.params.id
            }`
        )

        Promise.all([post, comments]).then(res => {
            const [post, comments] = res
            this.setState({
                post: post.data,
                comments: comments.data,
                loading: false,
            })
        })
    }

    render() {
        return (
            <Layout>
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <div>
                        <h1>
                            {this.state.post ? this.state.post.title : null}
                        </h1>
                        <div className="user">
                            {this.state.user ? (
                                <Link to={`/userid/${this.state.user.id}`}>
                                    {this.state.user.name}
                                </Link>
                            ) : null}
                        </div>
                        <p>{this.state.post ? this.state.post.body : null}</p>

                        <div className="comments">
                            <Comments comments={this.state.comments} />
                        </div>
                    </div>
                )}
            </Layout>
        )
    }
}
