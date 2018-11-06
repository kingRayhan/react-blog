import React, { Component } from 'react'
import Axios from 'axios'
import Layout from './Layout'
import Loader from './Loader'

export default class Gallery extends Component {
    state = {
        photos: [],
        loading: true,
    }
    componentWillMount() {
        setTimeout(() => {
            Axios.get(`https://jsonplaceholder.typicode.com/photos`).then(
                ({ data: photos }) => {
                    this.setState({
                        photos: photos.slice(0, 200),
                        loading: false,
                    })
                }
            )
        }, 1000)
    }

    render() {
        return (
            <Layout>
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <div className="gallery">
                        {this.state.photos.map(photo => (
                            <div className="photo">
                                <img src={photo.url} />
                                <h3>{photo.title}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </Layout>
        )
    }
}
