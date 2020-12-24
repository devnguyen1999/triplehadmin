import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import CustomLink from "../CustomLink";

function Sidebar() {
  return (
    <nav id="sidebar">
      {/* Sidebar Header*/}
      <div className="sidebar-header d-flex align-items-center">
        <div className="avatar">
          <img
            src="./assets/img/avatar-6.jpg"
            alt="..."
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="title">
          <h1 className="h5">Thanh Dev</h1>
          <p>Web Developer</p>
        </div>
      </div>
      {/* Sidebar Navidation Menus*/}
      <span className="heading">Menu</span>
      <ul className="list-unstyled">
        <CustomLink activeOnlyWhenExact={true} to="/" label={[<i className="icon-home" />, "Trang chủ"]}/>
        <CustomLink to="/the-loai" label={[<i className="icon-grid"/>, "Thể loại"]}/>
        <CustomLink to="/bai-viet" label={[<i className="icon-padnote" />, "Bài viết"]}/>
      </ul>
    </nav>
  );
}

export default Sidebar;
