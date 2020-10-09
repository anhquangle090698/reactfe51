
//Giá trị ban đầu của state
const stateDefault = {
    gioHang : [
        {maSP : 1, tenSP : 'IPhone X', ehinhAnh : 'https://picsum.photos/50', soLuong : 1, donGia : 10000}
    ]
}

//Hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefault, action) => {
    return {...state}
}

export default BaiTapGioHangReducer;