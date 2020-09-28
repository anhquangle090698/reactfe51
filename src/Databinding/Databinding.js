import React, { Component } from 'react'

export default class Databinding extends Component {
    
    //Thuộc tính của lớp đối tượng => Sử dụng được ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma : 1,
        avatar : 'http://picsum.photos/200/200',
        ten : 'Anh Quang'
    }

    //Phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng
    renderHocVien = () => {
        return (
            <div>
              <div className="card">
                <img className="card-img-top" src={this.hocVien.avatar} alt />
                <div className="card-body">
                  <h4 className="card-title">
                    { this.hocVien.ma }
                  </h4>
                  <p className="card-text">
                    { this.hocVien.ten }
                  </p>
                </div>
              </div>
            </div>
          );
    }

    render() {
        //binding data là biến
        let title = 'Anh Quang';
        let imgSrc = 'http://picsum.photos/200/200';

        //binding data là hàm
        const renderImg = () => {
            //Giá trị hàm muốn render ra giao diện phải trả về chuỗi, số , jsx

            return (
              <div>
                <div className="card">
                  <img className="card-img-top" src={imgSrc} alt />
                  <div className="card-body">
                    <h4 className="card-title">
                      { title }
                    </h4>
                    <p className="card-text">
                      { title }
                    </p>
                  </div>
                </div>
              </div>
            );
        }

        return (
            <div className="container">
                <div id="title">{ title }</div>
                <img src={ imgSrc } className="w-25"></img>

                <input className="w-25 d-block mt-3 form-control" value= { title }></input>

                {/* Gọi hàm */}
                {/* {renderImg()}  */}

                <h1>Thông tin học viên</h1>
                <p>{this.hocVien.ma}</p>
                <p>{this.hocVien.ten}</p>

                <hr></hr>

                {/* {this.renderHocVien()} */}
            </div>
        )
    }
}
