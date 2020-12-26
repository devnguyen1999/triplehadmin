import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";

function Categories() {
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    axios({
      method: "get",
      url: ApiBaseURL("category/load"),
    })
      .then((response) => {
        console.log(response.data.data);
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getCategories();
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
                              <tr key={key}>
                                <th scope="row">{key}</th>
                                <td>{value.name}</td>
                                <td>
                                  {value.status === "available"
                                    ? "Khả dụng"
                                    : "Không khả dụng"}
                                </td>
                                <td className="actions">
                                  <Link
                                    type="button"
                                    className="btn btn-warning w-100 mb-1"
                                    to={{
                                      pathname:
                                        "/the-loai/chinh-sua/" + value.nameUrl,
                                      params: {
                                        id: value._id,
                                        name: value.name,
                                        status: value.status,
                                      },
                                    }}
                                  >
                                    Chỉnh sửa
                                  </Link>
                                </td>
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
