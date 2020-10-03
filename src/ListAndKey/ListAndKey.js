import React, { Component } from 'react'

export default class ListAndKey extends Component {

    danhSachKhoaHoc = [
        "ReactJS",
        "Angular",
        "VueJS"
    ];

    renderDanhSachKhoaHoc = () => {
        return this.danhSachKhoaHoc.map((khoaHoc, index) => {
            return <ul key={index}>
                    <li>{khoaHoc}</li>
                     </ul>;
        });

        //map trả về array
        //foreach không trả về gì hết
    };

    render() {
        return (
            <div className="container">
                <h3>Danh Sách Khóa Học</h3>
                    {this.renderDanhSachKhoaHoc()}
            </div>
        )
    }
}
