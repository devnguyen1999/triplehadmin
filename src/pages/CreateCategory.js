import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Editor } from "@tinymce/tinymce-react";
import { getToken } from "../HandleUser";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

function CreateCategory() {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { from } = { from: { pathname: "/the-loai" } };
  const [redirect, setRedirect] = useState(false);
  const errorMessage = (error) => {
    return <small className="error">{error}</small>;
  };

  if (redirect) {
    return <Redirect to={from} />;
  }
  const onSubmit = (values) => {
    setError(null);
    setLoading(true);
    console.log(values.name);
    axios({
      method: "post",
      url: "https://h3-blog.herokuapp.com/category/create",
      headers: {
        token: getToken(),
      },
      data: {
        name: values.name,
      },
    })
      .then((response) => {
        setLoading(false);
        setRedirect(true);
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
              <h2 className="h5 no-margin-bottom">Tạo thể loại</h2>
            </div>
          </div>
          {/* Breadcrumb*/}
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active">Tạo thể loại</li>
            </ul>
          </div>
          <section className="no-padding-top">
            <div className="container-fluid">
              <div className="row">
                {/* Form Elements */}
                <div className="col-lg-12">
                  <div className="block">
                    <div className="title">
                      <strong>Tạo thể loại mới</strong>
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
                              placeholder="Nhập tên bài viết (không quá 30 kí tự)"
                              className="form-control"
                              id="name"
                              name="name"
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
                          <div className="col-sm-10 ml-auto">
                            <button
                              type="submit"
                              className="btn btn-primary mr-3"
                            >
                              Tạo thể loại
                            </button>
                            <Link
                              type="submit"
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

export default CreateCategory;
