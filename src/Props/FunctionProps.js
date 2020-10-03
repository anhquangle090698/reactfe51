import React from 'react'

// Nhân props như truyển tham số
export default function FunctionProps(props) {
    // console.log("props",props); => Object
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
        </div>
    )
}
