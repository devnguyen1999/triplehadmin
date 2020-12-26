import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../HandleUser";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ApiBaseURL } from "../ApiBaseURL";

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
    axios({
      method: "post",
      url: ApiBaseURL("user/login"),
      data: {
        email: values.email,
        password: values.password,
      },
    })
      .then((response) => {
        if (response.data.user.role === "admin") {
          console.log(response.data);
          setLoading(false);
          setUserSession(
            response.data.token,
            response.data.refreshToken,
            values.email,
            response.data.user.name
          );
          setRedirect(true);
        } else {
          setError("Chỉ quản trị viên mới có quyền đăng nhập trang này.");
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 403) {
          setError(error.response.data.message);
        } else {
          setError("Có lỗi xảy ra. Vui lòng thử lại.");
          setLoading(false);
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
                    <div className="form-group">
                      <label htmlFor="email" className="label-material">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        ref={register({
                          required: "Email không được để trống.",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Email không hợp lệ",
                          },
                        })}
                        className="input-material"
                        placeholder="Nhập email đăng nhập"
                        type="email"
                      />
                      {errors.email && errorMessage(errors.email.message)}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="label-material">
                        Mật khẩu
                      </label>
                      <input
                        id="password"
                        name="password"
                        ref={register({
                          required: "Mật khẩu không được để trống.",
                          minLength: {
                            value: 6,
                            message: "Mật khẩu phải có ít nhất 6 kí tự.",
                          },
                        })}
                        type="password"
                        className="input-material"
                        placeholder="Nhập mật khẩu"
                      />
                      {errors.password && errorMessage(errors.password.message)}
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
