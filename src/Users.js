import React, { Component } from 'react'
import Layout from './Layout'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from './Loader'
export default class Users extends Component {
    state = {
        users: [],
        loading: true,
    }
    componentWillMount() {
        Axios.get(`https://jsonplaceholder.typicode.com/users`).then(
            ({ data: users }) => this.setState({ users, loading: false })
        )
    }

    render() {
        return (
            <Layout>
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <div>
                        <h3>{this.state.users.length} awesome authors 🔥🔥</h3>
                        <div className="users">
                            {this.state.users.map(user => (
                                <div className="user" key={user.id}>
                                    <h3>{user.name}</h3>
                                    <p>
                                        <b>Email:</b> {user.email}
                                    </p>
                                    <p>
                                        <b>Phone</b>: {user.phone}
                                    </p>
                                    <p>
                                        <b>website</b>: {user.website}
                                    </p>
                                    <Link to={`/userid/${user.id}`}>
                                        All Articles
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Layout>
        )
    }
}
