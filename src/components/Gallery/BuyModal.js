import React,{useState} from 'react';
import { useForm } from "react-hook-form";

function BuyModal(props) {
    const {
      register: register2,
      errors: errors2,
      handleSubmit: handleSubmit2,
    } = useForm();
    const onSubmitBuy = (values, e) => {
        e.target.reset();
        props.close();
        alert("Đăng kí thành công");
    };
    return (
        <div className={"container-modal " + props.show}>
        <div className="modal-buy">
          <lable for="showmodal" className="close-buy" onClick={props.close}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </lable>
          <form for="#" onSubmit={handleSubmit2(onSubmitBuy)}>
            <label style={{ display: "block" }}>Họ và tên</label>
            <input
              type="text"
              name="buy_hoten"
              id="buy_hoten"
              placeholder="abc"
              ref={register2({
                required: true,
                maxLength: 30,
                pattern: {
                  value: /^[A-Za-z]+$/i,
                },
              })}
            ></input>
            {errors2.buy_hoten && errors2.buy_hoten.type === "required" && (
              <span className="errors-name1">Họ tên không được bỏ trống</span>
            )}
            {errors2.buy_hoten && errors2.buy_hoten.type === "maxLength" && (
              <span className="errors-name1">Max length exceeded</span>
            )}
            {errors2.buy_hoten && errors2.buy_hoten.type === "pattern" && (
              <span className="errors-name1" style={{ color: "red" }}>
                Không đúng định dạng
              </span>
            )}
            <label style={{ display: "block" }}>Email</label>
            <input
              type="text"
              id="buy_email"
              name="buy_email"
              placeholder="example@hotmail.com"
              ref={register2({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            ></input>
            {errors2.buy_email?.type === "required" && (
              <p className="errors-name1">Email không được bỏ trống</p>
            )}
            {errors2.buy_email?.type === "pattern" && (
              <p className="errors-name1">Email không đúng định dạng</p>
            )}
            <label style={{ display: "block" }}>Số điện thoại</label>
            <input
              type="text"
              id="buy_sdt"
              name="buy_sdt"
              placeholder="0123456789"
              ref={register2({
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            ></input>
            {errors2.buy_sdt && errors2.buy_sdt.type === "required" && (
              <span className="errors-name1">
                Số điện thoại không được bỏ trống
              </span>
            )}
            {errors2.buy_sdt && errors2.buy_sdt.type === "minLength" && (
              <span className="errors-name1">
                Số điện thoại có phải có 10 chữ số và không có ký tự
              </span>
            )}
            {errors2.buy_sdt && errors2.buy_sdt.type === "maxLength" && (
              <span className="errors-name1">
                Số điện thoại có phải có 10 chữ số và không có ký tự
              </span>
            )}
            <label style={{ display: "block" }}>Nơi bạn sống</label>
            <select
              id="buy_live"
              name="buy_live"
              ref={register2({ required: false })}
            >
              <option value="">Chọn nơi bạn sống</option>
              <option value="">Hà Nội</option>
              <option value="">Hồ Chí Minh</option>
              <option value="">Đà Nẵng</option>
            </select>
            {errors2.buy_live && (

                <p className="errors-name1">Bạn chưa chọn nơi sống</p>

            )}
            <label style={{ display: "block" }}>Gói tập</label>
            <select
              id="buy_bag"
              name="buy_bag"
              ref={register2({ required: false })}
            >
              <option value="">Chọn gói tập bạn muốn</option>
              <option value="">Basic</option>
              <option value="">Standard</option>
              <option value="">Premium</option>
            </select>
            {errors2.buy_bag && (

                <p className="errors-name1">Bạn chưa chọn gói tập</p>

            )}
            <label style={{ display: "block" }}>Lời nhắn</label>
            <input
              type="text"
              id="buy-loinhan"
              name="buy-loinhan"
              placeholder="Bạn muốn nhắn gì với chúng tôi"
            ></input>
            <button
              type="submit"
              class="buy-button btn-danger"
              style={{ display: "block" }}
            >
              BUY
            </button>
          </form>
        </div>
      </div>
    );
}

export default BuyModal;
