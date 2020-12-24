import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://h3-blog.herokuapp.com/post/load?page=1&pageSize=2",
    })
      .then((response) => {
        setPosts(response.data.data);
        console.log(posts);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="d-flex align-items-stretch">
        <Sidebar />
        <div className="page-content">
          {/* Page Header*/}
          <div className="page-header no-margin-bottom">
            <div className="container-fluid">
              <h2 className="h5 no-margin-bottom">Bài viết</h2>
            </div>
          </div>
          {/* Breadcrumb*/}
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active">Bài viết</li>
            </ul>
          </div>
          <section className="no-padding-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="block">
                    <div className="title">
                      <strong>Quản lý bài viết</strong>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Tiêu đề</th>
                            <th>Hình ảnh</th>
                            <th>Thể loại</th>
                            <th>Tóm tắt</th>
                            <th>Ngày đăng</th>
                            <th>Ngày cập nhật</th>
                            <th>Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          {posts.map((value, key) => {
                            return (
                              <tr>
                                <th scope="row">{key}</th>
                                <td>{value.title}</td>
                                <td>{value.image}</td>
                                <td>{value.category}</td>
                                <td>{value.summary}</td>
                                <td>{value.createdAt}</td>
                                <td>{value.updatedAt}</td>
                                <td>Actions</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-5">
                      <Link
                        type="button"
                        className="btn btn-primary mr-3"
                        to="/tao-bai-viet"
                      >
                        Thêm bài viết mới
                      </Link>
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

export default Posts;
