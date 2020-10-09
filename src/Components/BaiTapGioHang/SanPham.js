import React, { Component } from "react";

export default class SanPham extends Component {

  render() {
    // console.log(this.props);
    let {sanPham, handleChiTiet, handleThemSanPham} = this.props;
    return (
      <>
        <div className="card">
          <img className="card-img-top" src={sanPham.hinhAnh} alt="Anh Quang" />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <button className="btn btn-success" onClick={() => {
                handleChiTiet(sanPham);
            }}>Chi tiết</button>
            <button className="btn btn-danger" onClick={() => {
                handleThemSanPham(sanPham);
            }}>Thêm giỏ hàng</button>
          </div>
        </div>
      </>
    );
  }
}
 