import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { getToken } from "../HandleUser";
import Pagination from "react-js-pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 10;
  const getPosts = () => {
    axios({
      method: "get",
      url: ApiBaseURL("post/load?page=" + page + "&pageSize=" + pageSize),
    })
      .then((response) => {
        setTotal(response.data.total);
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const deletePost = (event, id) => {
    event.preventDefault();
    event.target.value = "Loading...";
    axios({
      method: "post",
      url: ApiBaseURL("post/delete"),
      headers: {
        token: getToken(),
      },
      data: {
        id: id,
      },
    })
      .then((response) => {
        console.log(response.data);
        getPosts();
      })
      .catch((error) => {
        console.log(error.response);
        event.target.value = "Xoá";
      });
  };
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    axios({
      method: "get",
      url: ApiBaseURL("post/load?page=" + pageNumber + "&pageSize=" + pageSize),
    })
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getPosts();
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
                            <th>Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          {posts.map((value, key) => {
                            // console.log(value);
                            return (
                              <tr key={key}>
                                <th scope="row">
                                  {(page - 1) * 10 + (key + 1)}
                                </th>
                                <td className="title">{value.title}</td>
                                <td className="image">
                                  <img
                                    src={value.img}
                                    alt={value.title}
                                    className="img-fluid"
                                  />
                                </td>
                                <td>{value.category}</td>
                                <td className="actions">
                                  <Link
                                    type="button"
                                    className="btn btn-warning w-100 mb-1"
                                    to={"/bai-viet/chinh-sua/" + value.nameUrl}
                                  >
                                    Chỉnh sửa
                                  </Link>
                                  <input
                                    type="button"
                                    className="btn btn-danger w-100 mt-2"
                                    onClick={(event) => {
                                      deletePost(event, value.id);
                                    }}
                                    value="Xoá"
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <Pagination
                        hideDisabled
                        totalItemsCount={total}
                        onChange={(pageNumber) => {
                          handlePageChange(pageNumber);
                        }}
                        activePage={page}
                        itemsCountPerPage={pageSize}
                        pageRangeDisplayed={3}
                      />
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
