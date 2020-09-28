// state less component là component function (react function)
//Create : cfc

import React from 'react'

export default function DemoStateless() {
    //Bên trong lệnh return của function component là nội dung giao diện. Lưu ý: nội dung component phải được bao phủ bởi 1 thẻ bất kỳ.
    return (
      // <div>
      //     <h1>React function component</h1>
      // </div>

      //or

      <div className="container">
        {/* <h1>React function component</h1>
         */}
        <div className="card text-white bg-primary my-3">
          <img className="card-img-top" src="holder.js/100px180/" alt />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
}
