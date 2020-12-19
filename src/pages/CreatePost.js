import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Editor } from "@tinymce/tinymce-react";

function CreatePost() {
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
                      <form className="form-horizontal">
                        <div className="form-group row">
                          <label className="col-sm-2 form-control-label">
                            Tiêu đề
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              placeholder="Nhập tên bài viết"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="line" />
                        <div className="form-group row">
                          <label className="col-sm-2 form-control-label">
                            Ảnh bài viết
                          </label>
                          <div className="col-sm-10">
                            <input type="file" className="form-control" />
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
                            <Editor textareaName="myTextArea" init={{
                                menubar: false,
                                plugins: [
                                  "advlist autolink lists link image charmap print preview anchor",
                                  "searchreplace visualblocks code fullscreen",
                                  "insertdatetime media table paste code help wordcount",
                                ],
                                toolbar:
                                  "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                              }}/>
                          </div>
                        </div>
                        <div className="line" />
                        <div className="form-group row">
                          <label className="col-sm-2 form-control-label">
                            Nội dung bài viết
                          </label>
                          <div className="col-sm-10">
                            <Editor
                              initialValue="<p>This is the initial content of the editor</p>"
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
                            <button type="submit" className="btn btn-secondary">
                              Huỷ bỏ
                            </button>
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
