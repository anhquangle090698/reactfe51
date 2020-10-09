import React, { Component } from 'react'
import danhSachSanPham from './dataRedux.json'
import GioHangRedux from './GioHangRedux'

export default class BaiTapGioHangRedux extends Component {
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
                </div>
            </>
        )
    }
}
