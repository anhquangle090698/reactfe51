import React, { Component } from 'react'
import SanPhamGHRedux from './SanPhamGHRedux'

//Import library connect between react component and redux store
//Delete export default
import {connect} from 'react-redux';

class GioHangRedux extends Component {

    renderGioHang = () => {
        // return <SanPhamGHRedux></SanPhamGHRedux>

        return this.props.gioHang.map((sp, index) => {
            return <SanPhamGHRedux sanPham = {sp} ></SanPhamGHRedux>
        })
    }

    render() {
        console.log("props", this.props);
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình Ảnh</th>
                            <th>Số Lượng</th>
                            <th>Đơn Giá</th>
                            <th>Thành Tiền</th>
                            <th>Xóa SP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </>
        )
    }
}

//Lấy state từ redux store biến thành props của component
//tham số state : đại diện cho rootReducer

const mapStateToProps = (state) => {
    //Tên biến nên đặt theo tên state
    return {
        gioHang : state.StateBaiTapGioHang.gioHang //state = rootReducer
    }
}

export default connect(mapStateToProps)(GioHangRedux); //Kết nối giữa gioHangReduxComponent và redux store