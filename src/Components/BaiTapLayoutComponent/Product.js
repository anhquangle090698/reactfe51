import React, { Component } from "react";

export default class Product extends Component {
  state = {
    mangSanPham: [
      {
        maSP: 1,
        tenSP: "IPhoneX",
        description:
          "iPhone X features a new all-screen design. Face ID, whichmakes your face your password",
        imgSrc: "./img/sp_iphoneX.png",
      },
      {
        maSP: 2,
        tenSP: "Black Berry",
        description:
          "Black Berry features a new all-screen design. Face ID, whichmakes your face your password",
        imgSrc: "./img/sp_blackberry.png",
      },
      {
        maSP: 3,
        tenSP: "Note7",
        description:
          "Note 7 features a new all-screen design. Face ID, whichmakes your face your password",
        imgSrc: "./img/sp_note7.png",
      },
      {
        maSP: 4,
        tenSP: "Vivo850",
        description:
          "Vivo850 features a new all-screen design. Face ID, whichmakes your face your password",
        imgSrc: "./img/sp_vivo850.png",
      },
    ],
  };

  renderDanhSachSanPham = () => {
    return this.state.mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <div className="card bg-light" style={{ width: 300 }}>
              <img
                className="card-img-top"
                src={sanPham.imgSrc}
                alt="Card image"
                style={{ maxWidth: "100%", height: 250 }}
              />
              <div className="card-body text-center">
                <h4 className="card-title text-center">{sanPham.tenSP}</h4>
                <p className="card-text">{sanPham.description}</p>
                <a href="#" className="btn btn-primary">
                  Detail
                </a>
                <a href="#" className="btn btn-danger">
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <>{this.renderDanhSachSanPham()}</>;
  }
}
