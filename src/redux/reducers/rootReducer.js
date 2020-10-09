//Khai báo tất cả các state của ứng dụng

import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';

//State tổng của ứng dụng
export const rootReducer = combineReducers({
    //Nơi khai báo các state theo từng nghiệp vụ
   StateBaiTapGioHang : BaiTapGioHangReducer
});
