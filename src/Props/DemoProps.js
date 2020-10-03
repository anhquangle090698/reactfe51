import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {

    state = {
        name : "Anh Quang",
        age : 22
    }

    render() {
        return (
            <div>
                {/* Thuộc tính trong component do mình tự định nghĩa */}
                {/* cách truyển props trong react */}
                <FunctionProps name = {this.state.name} 
                age = {this.state.age} ></FunctionProps>
                <ClassProps name = {this.state.name} 
                age = {this.state.age}></ClassProps>
            </div>
        )
    }
}
