import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { Link, useParams, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Editor } from "@tinymce/tinymce-react";
import { getToken } from "../HandleUser";
import { useForm } from "react-hook-form";

function EditPost() {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  var formData = new FormData();
  const { from } = { from: { pathname: "/bai-viet" } };
  const [redirect, setRedirect] = useState(false);
  const [categories, setCategories] = useState([]);
  const errorMessage = (error) => {
    return <small className="error">{error}</small>;
  };
  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  let { slug } = useParams();
  let one = ApiBaseURL("category/load");
  let two = ApiBaseURL("post/load/" + slug);
  useEffect(() => {
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          setCategories(responses[0].data.data);
          setPost(responses[1].data);
        })
      )
      .catch((errors) => {});
  }, []);

  const onSubmit = (values) => {
    // setLoading(true);
    // formData.append("title", values.title);
    // formData.append("image", selectedFile);
    // formData.append("category", values.category);
    // formData.append("tags", values.category);
    // formData.append("summary", values.summary);
    // formData.append("content", values.content);
    // axios({
    //   method: "post",
    //   url: ApiBaseURL("post/create"),
    //   data: formData,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     token: getToken(),
    //   },
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //     setLoading(false);
    //     setRedirect(true);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log(error.response.data);
    //   });
  };
  if (redirect) {
    return <Redirect to={from} />;
  }
  console.log(post);
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
              <h2 className="h5 no-margin-bottom">Chỉnh sửa bài viết</h2>
            </div>
          </div>
          {/* Breadcrumb*/}
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active">Chỉnh sửa bài viết</li>
            </ul>
          </div>
          <section className="no-padding-top">
            <div className="container-fluid">
              <div className="row">
                {/* Form Elements */}
                <div className="col-lg-12">
                  <div className="block">
                    <div className="title">
                      <strong>Chỉnh sửa bài viết</strong>
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
                                required: "Tiêu đề không được để trống.",
                                maxLength: {
                                  value: 100,
                                  message: "Tiêu đề tối đa 100 kí tự.",
                                },
                              })}
                            />
                            {errors.title && errorMessage(errors.title.message)}
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
                              onChange={(event) => {
                                handleImageChange(event);
                              }}
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
                              name="category"
                              className="form-control"
                              ref={register({
                                required: "Thể loại không được để trống.",
                              })}
                            >
                              <option value="">
                                -- Chọn thể loại bài viết --
                              </option>
                              {categories.map((value, key) => {
                                return (
                                  <option value={value.name}>
                                    {value.name}
                                  </option>
                                );
                              })}
                            </select>
                            {errors.category &&
                              errorMessage(errors.category.message)}
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
                                required:
                                  "Tóm tắt bài viết không được để trống.",
                                maxLength: {
                                  value: 100,
                                  message: "Tóm tắt bài viết tối đa 100 kí tự.",
                                },
                              })}
                            ></textarea>
                            {errors.summary &&
                              errorMessage(errors.summary.message)}
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
                          <input
                              type="submit"
                              className="btn btn-primary mr-3"
                              value={loading ? "Loading..." : "Cập nhật bài viết"}
                              disabled={loading}
                            />
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

export default EditPost;
