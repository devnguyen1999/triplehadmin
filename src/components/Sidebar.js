import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import CustomLink from '../CustomLink';
import { getName } from '../HandleUser';

function Sidebar() {
  const nameUser = getName();
  return (
    <nav id='sidebar'>
      {/* Sidebar Header*/}
      <div className='sidebar-header d-flex align-items-center'>
        <div className='avatar'>
          <img
            src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
            className='img-fluid rounded-circle'
            alt=''
          />
        </div>
        <div className='title'>
          <h1 className='h5'>{nameUser}</h1>
          <p>Web Developer</p>
        </div>
      </div>
      {/* Sidebar Navidation Menus*/}
      <span className='heading'>Menu</span>
      <ul className='list-unstyled'>
        <CustomLink
          activeOnlyWhenExact={true}
          to='/'
          label={[<i key={1} className='icon-home' />, 'Trang chủ']}
        />
        <CustomLink
          to='/the-loai'
          label={[<i key={2} className='icon-grid' />, 'Thể loại']}
        />
        <CustomLink
          to='/bai-viet'
          label={[<i key={3} className='icon-paper-and-pencil' />, 'Bài viết']}
        />
        <CustomLink
          to='/nguoi-dung'
          label={[
            <i key={3} className='icon-paper-and-pencil' />,
            'Người dùng',
          ]}
        />
      </ul>
    </nav>
  );
}

export default Sidebar;
