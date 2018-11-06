import React, { Component, Fragment } from 'react'
import Layout from './Layout'
import Loader from './Loader'
import axios from 'axios'
import Article from './Article'
export default class Home extends Component {
    state = { posts: [], loading: true, postToShow: 6 }
    componentWillMount() {
        const api = `https://jsonplaceholder.typicode.com/posts`
        setTimeout(() => {
            axios.get(api).then(d => {
                this.setState({ posts: d.data, loading: false })
            })
        }, 1000)
        // axios.get(api).then(d => {
        //     this.setState({ posts: d.data, loading: false })
        // })
    }

    render() {
        const loop = this.state.posts
            .slice(0, this.state.postToShow)
            .map(post => <Article post={post} key={post.id} />)
        const loadMore = (
            <button
                onClick={() =>
                    this.setState({
                        postToShow: (this.state.postToShow += 6),
                    })
                }
                style={{ fontSize: 20 }}
            >
                Load More
            </button>
        )
        return (
            <Layout>
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <Fragment>
                        <div className="articles">{loop}</div>
                        <div style={{ textAlign: 'center' }}>{loadMore}</div>
                    </Fragment>
                )}
            </Layout>
        )
    }
}
