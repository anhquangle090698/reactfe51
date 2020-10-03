import React, { Component } from 'react'

//Các bước thực hiện
//1 : dàn layout 
//2 : xác data thay đổi và lưu vào trong state
export default class ChonMauXe extends Component {

    state = {
        src : "./img/black-car.jpg"
    }

    changeColorCar = (src) => {
        this.setState({
            // src : src, cách 1
            src, // cách 2 
        });
    }

    render() {
        return (
          <div>
            <section className="show-room">
              <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
              <div className="container">
                <div className="chose__color d-flex justify-content-around">
                  <button className="btn" onClick = {() => {
                      this.changeColorCar("./img/black-car.jpg");
                  }}>
                    <img
                      src="./img/icon-black.jpg"
                      alt="hinh"
                      style={{ width: 50 }}
                    />

                  </button>
                  <button className="btn" onClick = {() => {
                      this.changeColorCar("./img/red-car.jpg");
                  }}>
                    <img
                      src="./img/icon-red.jpg"
                      alt="hinh"
                      style={{ width: 50 }}
                    />
                  </button>
                  <button className="btn" onClick = {() => {
                      this.changeColorCar("./img/silver-car.jpg");
                  }}>
                    <img
                      src="./img/icon-silver.jpg"
                      alt="hinh"
                      style={{ width: 50 }}
                    />
                  </button>
                  <button className="btn" onClick = {() => {
                      this.changeColorCar("./img/steel-car.jpg");
                  }}>
                    <img
                      src="./img/icon-steel.jpg"
                      alt="hinh"
                      style={{ width: 50 }}
                    />
                  </button>
                </div>
                <div className="car mt-2">
                  <img
                    className="img-thumbnail"
                    src={this.state.src}
                    alt="hinh"
                  />
                </div>
              </div>
            </section>
          </div>
        );
    }
}
