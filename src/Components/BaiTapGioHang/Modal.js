import React, { Component } from 'react'
import CardItem from './CardItem'


export default class Modal extends Component {
    renderCardList = () => {
        return this.props.cardList.map((card,index) => {
            return <CardItem card = {card} key={index} handleXoaSPModal = {this.props.handleXoaSanPham}
            handleTangSoLuongModal = {this.props.handleTangSoLuong}
            handleGiamSoLuongModal = {this.props.handleGiamSoLuong}></CardItem>
        });
    }
    render() {
      console.log(this.props);
        return (
            <>
                <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog"
              role="document"
              style={{ maxWidth: 1000 }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Giỏ hàng</h5>
                  <button
                    type="button"
                    classame="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>tên sản phẩm</th>
                        <th>hình ảnh</th>
                        <th>số lượng</th>
                        <th>đơn giá</th>
                        <th>thành tiền</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                        {this.renderCardList()}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
            </>
        )
    }
}
