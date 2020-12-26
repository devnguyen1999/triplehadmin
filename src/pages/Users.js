import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { ApiBaseURL } from '../ApiBaseURL';
import { getToken } from '../HandleUser';
import Users from '../components/UsersList';
import UsersList from '../components/UsersList';

const axios = require('axios').default;

function User() {
  let url = ApiBaseURL('user/loadAllUser');
  const token = getToken();
  url += `?token=${token}`;
  const [users, setUsers] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data.data);
      })
      .catch((errors) => {});
  }, []);
  return (
    <div>
      <Header />
      <div className='d-flex align-items-stretch'>
        {/* Sidebar Navigation Start Here */}
        <Sidebar />
        {/* Sidebar Navigation End Here*/}
        <div className='page-content'>
          <div className='page-header'>
            <div className='container-fluid'>
              <h2 className='h5 no-margin-bottom'>Người dùng</h2>
            </div>
          </div>
          <div>
            <UsersList/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default User;
