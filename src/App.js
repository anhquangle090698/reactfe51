import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoStateless from "./Components/DemoStateless";
import DemoStateFul from './Components/DemoStateFul';
import BaiTapLayout1 from "./Components/BaiTapLayoutComponent/BaiTapLayout1"
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import ConditionAndState from './ConditionAndState/ConditionAndState';
import BaiTapChonMauXe from './Components/BaiTapChonMauXe/ChonMauXe';
import ListAndKey from './ListAndKey/ListAndKey';
import DemoProps from './Props/DemoProps';
import BaiTapGioHang from './Components/BaiTapGioHang/BaiTapGioHang';
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHangRedux';


function App() {
  return (
    <div>
      {/* <BaiTapLayout1></BaiTapLayout1> */}
      {/* <Databinding></Databinding> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <ConditionAndState></ConditionAndState> */}
      {/* <BaiTapChonMauXe></BaiTapChonMauXe> */}
      {/* <ListAndKey></ListAndKey> */}
      {/* <DemoProps></DemoProps> */}
      {/* <BaiTapGioHang></BaiTapGioHang> */}
      <BaiTapGioHangRedux></BaiTapGioHangRedux>
    </div>
  );
}

export default App; 
