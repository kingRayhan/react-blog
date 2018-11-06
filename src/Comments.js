import React, { Component } from 'react'
import Axios from 'axios'

export default class Comments extends Component {
    render() {
        const ccount = this.props.comments.length
        return (
            <div className="comments">
                <h3>
                    {ccount} Comment
                    {ccount > 2 ? 's' : ''}
                </h3>
                {this.props.comments.map(comment => (
                    <div className="comment">
                        <b>By {comment.email}</b>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}
