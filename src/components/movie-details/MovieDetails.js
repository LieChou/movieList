import React, { Component } from 'react';

export default class MovieDetails extends Component {

    render() {
        return (
            <div className="w-25 border p-4 d-flex flex-column">
                <h5>{this.props.movie.title}</h5>
                <div className="d-block mx-auto">
                    <img src={this.props.movie.img} />
                </div>
                <hr className="w-100" />
                <span className="text-secondary">{this.props.movie.details}</span>
                <hr className="w-100" />
                <p>{this.props.movie.description}</p>
            </div>

        )
    }
}