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

function CreatePost() {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  var formData = new FormData();
  const { from } = { from: { pathname: "/" } };
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
    formData.append("token", getToken());
    formData.append("title", values.title);
    formData.append("image", "");
    formData.append("category", values.category);
    formData.append("tags", "");
    formData.append("summary", values.summary);
    formData.append("content", values.content);
    axios({
      method: "post",
      url: "https://h3-blog.herokuapp.com/post/create",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setRedirect(true);
      })
      .catch((error) => {
        setLoading(false);
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
              <h2 className="h5 no-margin-bottom">Tạo bài viết</h2>
            </div>
          </div>
          {/* Breadcrumb*/}
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active">Tạo bài viết</li>
            </ul>
          </div>
          <section className="no-padding-top">
            <div className="container-fluid">
              <div className="row">
                {/* Form Elements */}
                <div className="col-lg-12">
                  <div className="block">
                    <div className="title">
                      <strong>Tạo bài viết mới</strong>
                    </div>
                    <div className="block-body">
                      <form
                        className="form-horizontal"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="form-group row">
                          <label className="col-sm-2 form-control-label">
                            Tiêu đề
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              placeholder="Nhập tên bài viết (không quá 100 kí tự)"
                              className="form-control"
                              id="title"
                              name="title"
                              ref={register({
                                required: true,
                                maxLength: 100,
                              })}
                            />
                            {errors.title &&
                              errors.title.type === "required" &&
                              errorMessage("Tiêu đề không được để trống.")}
                            {errors.title &&
                              errors.title.type === "maxLength" &&
                              errorMessage("Tiêu đề tối đa 100 kí tự.")}
                          </div>
                        </div>
                        <div className="line" />
                        <div className="form-group row">
                          <label className="col-sm-2 form-control-label">
                            Ảnh bài viết
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="file"
                              className="form-control"
                              id="image"
                              name="image"
                            />
                          </div>
                        </div>
                        <div className="line" />
                        <div className="form-group row">
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
                        <div className="line" />
                        <div className="form-group row">
                          <label className="col-sm-2 form-control-label">
                            Tóm tắt bài viết
                          </label>
                          <div className="col-sm-10">
                            <textarea
                              className="form-control h-100"
                              id="summary"
                              name="summary"
                              maxLength={300}
                              rows={5}
                              placeholder="Nhập tóm tắt bài viết (không quá 300 kí tự)"
                              ref={register({
                                required: true,
                                maxLength: 300,
                              })}
                            ></textarea>
                            {errors.summary &&
                              errors.summary.type === "required" &&
                              errorMessage(
                                "Tóm tắt bài viết không được để trống."
                              )}
                            {errors.summary &&
                              errors.summary.type === "maxLength" &&
                              errorMessage(
                                "Tóm tắt bài viết tối đa 100 kí tự."
                              )}
                          </div>
                        </div>
                        <div className="line" />
                        <div className="form-group row content">
                          <label className="col-sm-2 form-control-label">
                            Nội dung bài viết
                          </label>
                          <div className="col-sm-10">
                            <Editor
                              id="content"
                              className="form-control"
                              initialValue=""
                              init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                  "advlist autolink lists link image charmap print preview anchor",
                                  "searchreplace visualblocks code fullscreen",
                                  "insertdatetime media table paste code help wordcount",
                                ],
                                toolbar:
                                  "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                              }}
                            />
                          </div>
                        </div>
                        <div className="line" />
                        <div className="form-group row">
                          <div className="col-sm-10 ml-auto">
                            <button
                              type="submit"
                              className="btn btn-primary mr-3"
                            >
                              Tạo bài viết
                            </button>
                            <Link
                              type="submit"
                              className="btn btn btn-secondary"
                              to="/bai-viet"
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

export default CreatePost;
