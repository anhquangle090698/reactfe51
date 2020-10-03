import React, { Component } from 'react'

export default class ConditionAndState extends Component {

    //Thuộc tính
    isLogin = false;

    state = {
        isLogin : false
    }

    //Phương thức
    renderContent = () => {
        if(this.state.isLogin) {
            return <p>Anh Quang</p>
        }
        return <button className="btn btn-success">Login</button>
    }

    login = () => {
        this.setState({
            isLogin : true
        });
    }
    render() {
        return (
            <div className="container">
                {this.renderContent()}
                <button className="btn btn-success ml-3" onClick={() => {
                    this.login();
                }}>Login</button>
            </div>
        )
    }
}
