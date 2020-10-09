import React, { Component } from "react";
import danhSachSanPham from "./data.json";
import Modal from "./Modal";
import SanPham from "./SanPham";

//Các bước làm 1 task về react
//1. Dàn layout (html css) 
//2. Xác định dữ liệu thay đổi và lưu state (dùng mảng hay chuỗi). 
//3. Xác định nơi lưu trữ State 
  //+ Đặt ở nơi chứa giao diện binding dữ liệu đó ra (trực tiếp hoặc gián tiếp)
  //+ State chứa các xử lý làm thay đổi dữ liệu đó (setState)
//4. Xử lý chức năng
export default class BaiTapGioHang extends Component {
  
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/imageGioHang/vsphone.jpg",
    },
    cardList: [],
  };

  renderDanhSachSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham sanPham = {sanPham} handleChiTiet = {this.handleSanPhamChiTiet} handleThemSanPham = {this.handleThemSanPhamGioHang}></SanPham>
        </div>
      );
    });
  };


  //State ở đâu, setState ở đó
  handleSanPhamChiTiet = (sanPhamChiTiet) => {
      this.setState({
        sanPhamChiTiet,
      });
  }

  handleThemSanPhamGioHang = (sanPham) => {
    let cardList = [...this.state.cardList];
    //Tìm vị trí
    const index = this.state.cardList.findIndex((card) => {
        return card.maSP === sanPham.maSP;
    });

    if(index !== -1) {
        //tìm thấy => tăng số lượng
        cardList[index].soLuong++;
    }else {
        //không tìm thấy => thêm vào mảng
        const newCard = {...sanPham, soLuong : 1};
        cardList = [...cardList, newCard];
    }

    this.setState({
        cardList,
    });
  }

  handleXoaSanPhamGioHang = (sanPham) => {
    //Xử lý xóa giỏ hàng
    let cardList = [...this.state.cardList];

    //Tìm vị trí
    const index = this.state.cardList.findIndex((card) => {
      return card.maSP === sanPham.maSP;
    });

    if(index !== -1) {
      cardList.splice(index, 1);
    }

    //Set state
    this.setState({
      cardList,
    });
  }

  handleTangSoLuongSanPham = (sanPham) => {
    let cardList = [...this.state.cardList];

    const index = this.state.cardList.findIndex((card) => {
      return card.maSP === sanPham.maSP;
    });

    if(index !== -1) {
        //tìm thấy => tăng số lượng
        cardList[index].soLuong++;
    }

    this.setState({
      cardList,
    });
  }

  handleGiamSoLuongSanPham = (sanPham) => {
    let cardList = [...this.state.cardList];

    const index = this.state.cardList.findIndex((card) => {
      return card.maSP === sanPham.maSP;
    });

    if(index !== -1) {
        //tìm thấy => tăng số lượng
        if(cardList[index].soLuong > 1){
          cardList[index].soLuong--;
        }
    }

    this.setState({
      cardList,
    });
  }

  handleTongSoLuongSanPhamTrongGioHang = () => {
    let cardList = [...this.state.cardList];

    // let tongSoLuong = 0;
    // cardList.forEach((card) => {
    //   tongSoLuong += card.soLuong;
    // });

    // return tongSoLuong;

    return cardList.reduce((tongSoLuong, card) => {
      return tongSoLuong += card.soLuong;
    }, 0)     
  }

  handleTongTienSanPhamTrongGioHang = () => {
    let cardList = [...this.state.cardList];

    return cardList.reduce((tongTien, card) => {
      return tongTien += card.soLuong*card.giaBan;
    },0);
  }

  render() { 
    return (
      <div>
        {/* LIST SAN PHAM */}
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ({this.handleTongSoLuongSanPhamTrongGioHang()} - {this.handleTongTienSanPhamTrongGioHang().toLocaleString()})
            </button>
          </div>
          <div className="container danh-sach-san-pham">
            <div className="row">
                {/* Gọi hàm render San Pham */}
                {this.renderDanhSachSanPham()}
            </div>
          </div>
          {/* MODAL LIST SAN PHAM TRONG GIO HANG*/}
          <Modal cardList = {this.state.cardList} handleXoaSanPham = {this.handleXoaSanPhamGioHang}
          handleTangSoLuong = {this.handleTangSoLuongSanPham}
          handleGiamSoLuong = {this.handleGiamSoLuongSanPham}></Modal>
          {/* CHI TIET SAN PHAM */}
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.state.sanPhamChiTiet.hinhAnh}
                alt ="bb"
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.state.sanPhamChiTiet.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.sanPhamChiTiet.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
