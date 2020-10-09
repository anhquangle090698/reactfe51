import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import danhSachSanPham from './dataRedux.json'
import SanPhamRedux from './SanPhamRedux'

export default class BaiTapGioHangRedux extends Component {

    renderSanPham = () => {
        return danhSachSanPham.map((sanPham, index) => {
            return <div className="col-md-4" key={index}>
                <SanPhamRedux sanPham = {sanPham} ></SanPhamRedux>
            </div>
        })
    }

    render() {
        return (
            <>
               <div className="container">
                    <h3 className="text-center">Bài Tập Giỏ Hàng Redux</h3>
                    <div className="">
                        <div className="text-right">
                            Giỏ hàng (0)
                        </div>
                        <GioHangRedux></GioHangRedux>
                    </div>
                    <div className="row">
                        {this.renderSanPham()}
                    </div>
                </div>
            </>
        )
    }
}
