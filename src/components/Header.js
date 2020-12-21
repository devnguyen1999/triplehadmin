import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { getToken, removeUserSession } from "../HandleUser";
import Axios from "axios";

function Header() {
  const { from } = { from: { pathname: "/dang-nhap" } };
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={from} />;
  }

  const logout = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "https://h3-blog.herokuapp.com/user/logout",
      data: {
        token: getToken()
      }
    })
      .then((response) => {
        console.log(response.data);
        removeUserSession();
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="search-panel">
            <div className="search-inner d-flex align-items-center justify-content-center">
              <div className="close-btn">
                Close <i className="fa fa-close" />
              </div>
              <form id="searchForm" action="#">
                <div className="form-group">
                  <input
                    type="search"
                    name="search"
                    placeholder="What are you searching for..."
                  />
                  <button type="submit" className="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <div className="navbar-header">
              {/* Navbar Header Start Here */}
              <Link to="/admin" className="navbar-brand">
                <div className="brand-text brand-big visible text-uppercase">
                  <strong className="text-primary">Dark</strong>
                  <strong>Admin</strong>
                </div>
                <div className="brand-text brand-sm">
                  <strong className="text-primary">D</strong>
                  <strong>A</strong>
                </div>
              </Link>
              {/* Sidebar Toggle Button */}
              <button className="sidebar-toggle">
                <i className="fa fa-long-arrow-left" />
              </button>
            </div>
            <div className="right-menu list-inline no-margin-bottom">
              <div className="list-inline-item">
                <a href="#" className="search-open nav-link">
                  <i className="icon-magnifying-glass-browser" />
                </a>
              </div>
              <div className="list-inline-item dropdown">
                <a
                  id="navbarDropdownMenuLink1"
                  href="http://example.com"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link messages-toggle"
                >
                  <i className="icon-email" />
                  <span className="badge dashbg-1">5</span>
                </a>
                <div
                  aria-labelledby="navbarDropdownMenuLink1"
                  className="dropdown-menu messages"
                >
                  <a
                    href="#"
                    className="dropdown-item message d-flex align-items-center"
                  >
                    <div className="profile">
                      <img
                        src="img/avatar-3.jpg"
                        alt="..."
                        className="img-fluid"
                      />
                      <div className="status online" />
                    </div>
                    <div className="content">
                      <strong className="d-block">Nadia Halsey</strong>
                      <span className="d-block">
                        lorem ipsum dolor sit amit
                      </span>
                      <small className="date d-block">9:30am</small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="dropdown-item message d-flex align-items-center"
                  >
                    <div className="profile">
                      <img
                        src="img/avatar-2.jpg"
                        alt="..."
                        className="img-fluid"
                      />
                      <div className="status away" />
                    </div>
                    <div className="content">
                      <strong className="d-block">Peter Ramsy</strong>
                      <span className="d-block">
                        lorem ipsum dolor sit amit
                      </span>
                      <small className="date d-block">7:40am</small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="dropdown-item message d-flex align-items-center"
                  >
                    <div className="profile">
                      <img
                        src="img/avatar-1.jpg"
                        alt="..."
                        className="img-fluid"
                      />
                      <div className="status busy" />
                    </div>
                    <div className="content">
                      <strong className="d-block">Sam Kaheil</strong>
                      <span className="d-block">
                        lorem ipsum dolor sit amit
                      </span>
                      <small className="date d-block">6:55am</small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="dropdown-item message d-flex align-items-center"
                  >
                    <div className="profile">
                      <img
                        src="img/avatar-5.jpg"
                        alt="..."
                        className="img-fluid"
                      />
                      <div className="status offline" />
                    </div>
                    <div className="content">
                      <strong className="d-block">Sara Wood</strong>
                      <span className="d-block">
                        lorem ipsum dolor sit amit
                      </span>
                      <small className="date d-block">10:30pm</small>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item text-center message">
                    <strong>
                      See All Messages <i className="fa fa-angle-right" />
                    </strong>
                  </a>
                </div>
              </div>
              {/* Tasks Start Here */}
              <div className="list-inline-item dropdown">
                <a
                  id="navbarDropdownMenuLink2"
                  href="http://example.com"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link tasks-toggle"
                >
                  <i className="icon-new-file" />
                  <span className="badge dashbg-3">9</span>
                </a>
                <div
                  aria-labelledby="navbarDropdownMenuLink2"
                  className="dropdown-menu tasks-list"
                >
                  <a href="#" className="dropdown-item">
                    <div className="text d-flex justify-content-between">
                      <strong>Task 1</strong>
                      <span>40% complete</span>
                    </div>
                    <div className="progress">
                      <div
                        role="progressbar"
                        style={{ width: "40%" }}
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="progress-bar dashbg-1"
                      />
                    </div>
                  </a>
                  <a href="#" className="dropdown-item">
                    <div className="text d-flex justify-content-between">
                      <strong>Task 2</strong>
                      <span>20% complete</span>
                    </div>
                    <div className="progress">
                      <div
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="progress-bar dashbg-3"
                      />
                    </div>
                  </a>
                  <a href="#" className="dropdown-item">
                    <div className="text d-flex justify-content-between">
                      <strong>Task 3</strong>
                      <span>70% complete</span>
                    </div>
                    <div className="progress">
                      <div
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="progress-bar dashbg-2"
                      />
                    </div>
                  </a>
                  <a href="#" className="dropdown-item">
                    <div className="text d-flex justify-content-between">
                      <strong>Task 4</strong>
                      <span>30% complete</span>
                    </div>
                    <div className="progress">
                      <div
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="progress-bar dashbg-4"
                      />
                    </div>
                  </a>
                  <a href="#" className="dropdown-item">
                    <div className="text d-flex justify-content-between">
                      <strong>Task 5</strong>
                      <span>65% complete</span>
                    </div>
                    <div className="progress">
                      <div
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={65}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="progress-bar dashbg-1"
                      />
                    </div>
                  </a>
                  <a href="#" className="dropdown-item text-center">
                    <strong>
                      See All Tasks <i className="fa fa-angle-right" />
                    </strong>
                  </a>
                </div>
              </div>
              {/* Tasks End Here*/}

              {/* Logout Start Here */}
              <div className="list-inline-item logout">
                <a
                  id="logout"
                  type="button"
                  className="nav-link"
                  href="#!"
                  onClick={(event) => {
                    logout(event);
                  }}
                >
                  Đăng xuất <i className="icon-logout" />
                </a>
              </div>
              {/* Logout End Here */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
