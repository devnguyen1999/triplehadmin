import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { getToken } from "../HandleUser";

function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios({
      method: "get",
      url: ApiBaseURL("user/loadAllUser"),
      headers: {
        token: getToken(),
      },
    })
      .then((response) => {
        setUsers(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUsers();
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
              <h2 className="h5 no-margin-bottom">Người dùng</h2>
            </div>
          </div>
          {/* Breadcrumb*/}
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active">Người dùng</li>
            </ul>
          </div>
          <section className="no-padding-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="block">
                    <div className="title">
                      <strong>Quản lý người dùng</strong>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Tên người dùng</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((value, key) => {
                            return (
                              <tr key={key + 1}>
                                <th scope="row">{key}</th>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>
                                  {value.role === "admin"
                                    ? "Quản trị viên"
                                    : "Người dùng cơ bản"}
                                </td>
                                {/* <td className="actions">
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
                                </td> */}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
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

export default Users;
