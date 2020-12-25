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
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/119447804_1228180967541878_7855295942925810479_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=a_Pl06rhVhkAX-koYYn&_nc_ht=scontent.fvca1-2.fna&oh=8ace69218c3663ba62c4124945d6c342&oe=600C3412"
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
        <CustomLink activeOnlyWhenExact={true} to="/" label={[<i key={1} className="icon-home" />, "Trang chủ"]}/>
        <CustomLink to="/the-loai" label={[<i key={2} className="icon-grid"/>, "Thể loại"]}/>
        <CustomLink to="/bai-viet" label={[<i key={3} className="icon-paper-and-pencil" />, "Bài viết"]}/>
      </ul>
    </nav>
  );
}

export default Sidebar;
