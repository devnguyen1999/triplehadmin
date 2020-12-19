import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../HandleUser";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { from } = { from: { pathname: "/" } };
  const [redirect, setRedirect] = useState(false);
  const errorMessage = (error) => {
    return <small className="error mt-2">{error}</small>;
  };

  if (redirect) {
    return <Redirect to={from} />;
  }
  const onSubmit = (values) => {
    setError(null);
    setLoading(true);
    axios
      .post("https://h3-blog.herokuapp.com/user/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        if (response.data.role === "admin") {
          console.log(response.data);
          setLoading(false);
          setUserSession(response.data.token, response.data.refreshToken, values.email);
          setRedirect(true);
        } else {
          setError("Chỉ quản trị viên mới có quyền đăng nhập trang này.");
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401) {
          setError(error.response.data.message);
        } else {
          setError("Có lỗi xảy ra. Vui lòng thử lại.");
        }
      });
  };
  return (
    <div className="login-page">
      <div className="container d-flex align-items-center">
        <div className="form-holder has-shadow">
          <div className="row">
            {/* Logo & Information Panel*/}
            <div className="col-lg-6">
              <div className="info d-flex align-items-center">
                <div className="content">
                  <div className="logo">
                    <h1>Dashboard</h1>
                  </div>
                  <p>Chào mừng đến với trang dành cho Admin</p>
                </div>
              </div>
            </div>
            {/* Form Panel    */}
            <div className="col-lg-6">
              <div className="form d-flex align-items-center">
                <div className="content">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="form-validate mb-4"
                  >
                    {/* <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        ref={register({
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />
                      {errors.email &&
                        errors.email.type === "required" &&
                        errorMessage(required)}
                    </div> */}
                    <div className="form-group">
                      <label htmlFor="email" className="label-material">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        ref={register({
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                        className="input-material"
                        placeholder="Nhập email đăng nhập"
                        type="email"
                      />
                      {errors.email &&
                        errors.email.type === "required" &&
                        errorMessage("Email không được để trống.")}
                      {errors.email &&
                        errors.email.type === "pattern" &&
                        errorMessage("Email không hợp lệ.")}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="label-material">
                        Mật khẩu
                      </label>
                      <input
                        id="password"
                        name="password"
                        ref={register({
                          required: true,
                          minLength: 6,
                        })}
                        type="password"
                        className="input-material"
                        placeholder="Nhập mật khẩu"
                      />
                      {errors.password &&
                        errors.password.type === "required" &&
                        errorMessage("Mật khẩu không được để trống.")}
                      {errors.password &&
                        errors.password.type === "minLength" &&
                        errorMessage("Mật khẩu phải có ít nhất 6 kí tự.")}
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value={loading ? "Loading..." : "Đăng nhập"}
                        disabled={loading}
                      />
                      {error && (
                        <>
                          <small className="error mt-2">{error}</small>
                        </>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights text-center text-dark">
        <p>Team Triple Heroes</p>
        {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
      </div>
    </div>
  );
}

export default Login;
