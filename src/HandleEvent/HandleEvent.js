import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showTitle = () => {
        alert('H');
    }

    showMess = (mess) => {
        alert(`Mess is ${mess}`)
    }

    render() {
        return (
            <div className="container">
                {/* //Xử lý sự kiện callback */}
                <button onClick= {this.showTitle}>Click me~</button>

                {/* Bind để trả về hàm chưa thực thi */}
                <button onClick= {this.showMess.bind(this, 'Quang')}>Click me~</button>

                {/* Xử lý sự kiện sử dụng hàm trung gian */}

                <button onClick= {() => {
                    this.showTitle();
                }}>Click me~</button>

                <button onClick= {() => {
                    this.showMess('Quang 1!');
                }}>Click me~</button>
            </div>
        )
    }
}
