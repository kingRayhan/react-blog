import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import Layout from './Layout'
import Loader from './Loader'
import Article from './Article'
export default class User extends Component {
    state = { user: null, posts: [], postToShow: 5 }

    componentWillMount() {
        const user = Axios.get(
            `https://jsonplaceholder.typicode.com/users/${
                this.props.match.params.userId
            }`
        )
        const posts = Axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${
                this.props.match.params.userId
            }`
        )
        Promise.all([user, posts]).then(res => {
            const [userRes, postRes] = res
            this.setState({
                user: userRes.data,
                posts: postRes.data,
            })
        })
    }

    render() {
        const loop = this.state.posts
            .slice(0, this.state.postToShow)
            .map(post => <Article post={post} key={post.id} />)
        const loadMore = (
            <button
                onClick={() =>
                    this.setState({
                        postToShow: (this.state.postToShow += 3),
                    })
                }
                style={{ fontSize: 20 }}
            >
                Load More
            </button>
        )
        return (
            <Layout>
                <div className="userinfo">
                    <h1>{this.state.user ? this.state.user.name : null}</h1>
                    <h3>
                        Username: @
                        {this.state.user ? this.state.user.username : null}
                    </h3>
                    <p>
                        Email: {this.state.user ? this.state.user.email : null}
                    </p>
                    <p>
                        Website:{' '}
                        <a
                            href={
                                this.state.user
                                    ? 'http://' + this.state.user.website
                                    : null
                            }
                            target="_blank"
                        >
                            {this.state.user ? this.state.user.website : null}
                        </a>
                    </p>
                </div>

                <mark>
                    {this.state.user ? (
                        <h3>
                            {this.state.user.name} has {this.state.posts.length}{' '}
                            articles
                        </h3>
                    ) : null}
                </mark>

                <div className="posts">
                    {this.state.loading ? (
                        <Loader />
                    ) : (
                        <Fragment>
                            <div className="articles">{loop}</div>
                            <div style={{ textAlign: 'center' }}>
                                {loadMore}
                            </div>
                        </Fragment>
                    )}
                </div>
            </Layout>
        )
    }
}
