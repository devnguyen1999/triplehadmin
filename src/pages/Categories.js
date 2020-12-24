import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://h3-blog.herokuapp.com/category/load",
    })
      .then((response) => {
        setCategories(response.data.data);
        console.log(response.data.data);
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
              <h2 className="h5 no-margin-bottom">Thể loại</h2>
            </div>
          </div>
          {/* Breadcrumb*/}
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active">Thể loại</li>
            </ul>
          </div>
          <section className="no-padding-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="block">
                    <div className="title">
                      <strong>Quản lý thể loại</strong>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Tên thể loại</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.map((value, key) => {
                            return (
                              <tr>
                                <th scope="row">{key}</th>
                                <td>{value.name}</td>
                                <td>{value.status}</td>
                                <td>Actions</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-5">
                      <Link
                        type="submit"
                        className="btn btn-primary mr-3"
                        to="/tao-the-loai"
                      >
                        Thêm thể loại mới
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

export default Categories;
