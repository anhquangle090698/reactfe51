import React, { Component } from "react";

export default class CardItem extends Component {
  thanhTien = () => {
    return this.props.card.giaBan * this.props.card.soLuong;
  };

  render() {
    let {
      handleXoaSPModal,
      card,
      handleGiamSoLuongModal,
      handleTangSoLuongModal,
    } = this.props;

    return (
      <tr>
        <td>{card.maSP}</td>
        <td>{card.tenSP}</td>
        <td>
          <img src={card.hinhAnh} width={50} alt="aa" />
        </td>
        <td>
          <button
            onClick={() => {
              handleGiamSoLuongModal(card);
            }}
          >
            -
          </button>
          {card.soLuong}
          <button
            onClick={() => {
              handleTangSoLuongModal(card);
            }}
          >
            +
          </button>
        </td>
        <td>{card.giaBan.toLocaleString()}</td>
        <td>{this.thanhTien().toLocaleString()}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleXoaSPModal(card);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
