import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { getToken } from "../HandleUser";
import { Redirect } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { ApiBaseURL } from "../ApiBaseURL";
function EditCategory(props) {
  const { handleSubmit, register, errors, control } = useForm();
  const [loading, setLoading] = useState(false);
  const { from } = { from: { pathname: "/the-loai" } };
  const [redirect, setRedirect] = useState(false);
  const errorMessage = (error) => {
    return <small className="error">{error}</small>;
  };
  if (redirect) {
    return <Redirect to={from} />;
  }
  const onSubmit = (values) => {
    setLoading(true);
    axios({
      method: "post",
      url: ApiBaseURL("category/update"),
      headers: {
        token: getToken(),
      },
      data: {
        id: props.location.params.id,
        name: values.name,
        status: values.status,
      },
    })
      .then((response) => {
        setLoading(false);
        setRedirect(true);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response.data);
      });
  };
  return (
    <div>
      <Header />
      <div className="d-flex align-items-stretch">
        {/* Sidebar Navigation Start Here */}
        <Sidebar />
        {/* Sidebar Navigation End Here*/}
        <div className="page-content">
          {/* Page Header*/}
          <div className="page-header no-margin-bottom">
            <div className="container-fluid">
              <h2 className="h5 no-margin-bottom">Chỉnh sửa thể loại</h2>
            </div>
          </div>
          {/* Breadcrumb*/}
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active">Chỉnh sửa thể loại</li>
            </ul>
          </div>
          <section className="no-padding-top">
            <div className="container-fluid">
              <div className="row">
                {/* Form Elements */}
                <div className="col-lg-12">
                  <div className="block">
                    <div className="title">
                      <strong>Chỉnh sửa thể loại</strong>
                    </div>
                    <div className="block-body">
                      <form
                        className="form-horizontal"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="form-group row">
                          <label className="col-sm-2 form-control-label">
                            Tên thể loại
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              placeholder="Nhập tên thể loại (không quá 30 kí tự)"
                              className="form-control"
                              id="name"
                              name="name"
                              defaultValue={props.location.params.name}
                              ref={register({
                                required: "Tên thể loại không được để trống.",
                                maxLength: {
                                  value: 20,
                                  message: "Tên thể loại tối đa 20 kí tự.",
                                },
                              })}
                            />
                            {errors.name && errorMessage(errors.name.message)}
                          </div>
                        </div>
                        <div className="line" />
                        {/* <div className="form-group row">
                        <label className="col-sm-2 form-control-label">
                          Thể loại
                        </label>
                        <div className="col-sm-10">
                          <select
                            name="account"
                            className="form-control mb-3 mb-3"
                          >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                          </select>
                        </div>
                      </div>
                      <div className="line" /> */}
                        <div className="form-group row">
                          <label className="col-sm-2 form-control-label">
                            Trạng thái
                          </label>
                          <div className="col-sm-10">
                            <input
                              id="available"
                              type="radio"
                              defaultValue="available"
                              defaultChecked={
                                (props.location.params.status === "available")
                              }
                              name="status"
                              className="radio-template"
                              ref={register}
                            />
                            <label htmlFor="available" className="mr-5">
                              Khả dụng
                            </label>
                            <input
                              id="unavailable"
                              type="radio"
                              defaultValue="unavailable"
                              defaultChecked={
                                (props.location.params.status === "unavailable")
                              }
                              name="status"
                              className="radio-template"
                              ref={register}
                            />
                            <label htmlFor="unavailable">Không khả dụng</label>
                          </div>
                        </div>
                        <div className="line" />
                        <div className="form-group row">
                          <div className="col-sm-10 ml-auto">
                            <input
                              type="submit"
                              className="btn btn-primary mr-3"
                              value={
                                loading ? "Loading..." : "Cập nhật thể loại"
                              }
                              disabled={loading}
                            />
                            <Link
                              className="btn btn btn-secondary"
                              to="/the-loai"
                            >
                              Huỷ bỏ
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}

EditCategory.propTypes = {};

export default EditCategory;
