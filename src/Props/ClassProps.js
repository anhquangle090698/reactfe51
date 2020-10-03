import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <h3>{this.props.age}</h3>
            </div>
        )
    }
}
