import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { ApiBaseURL } from '../ApiBaseURL';
import { getToken } from '../HandleUser';
const axios = require('axios').default;

function User() {
  const Users = [
    {name: "Trương Pháp 1", role: "admin", _id: "5fb9daabde3e551940029dae", email: "truongphapdh1@gmail.com"},
    {name: "Trương Pháp 2", role: "admin", _id: "5fb9daabde3e551940029dae", email: "truongphapdh2@gmail.com"},
    {name: "Trương Pháp 3", role: "admin", _id: "5fb9daabde3e551940029dae", email: "truongphapdh3@gmail.com"},
    {name: "Trương Pháp 4", role: "admin", _id: "5fb9daabde3e551940029dae", email: "truongphapdh4@gmail.com"},
  ];
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
            <table style={{margin: '15px', width: '60%'}}>
              <tr>
                <th style={{padding: '7px'}}>Username</th>
                <th style={{padding: '7px'}}>Role</th>
                <th style={{padding: '7px'}}>Email</th>
              </tr>
              <tr>
                <td style={{padding: '7px'}}>{ Users[0].name }</td>
                <td style={{padding: '7px'}}>{ Users[0].role }</td>
                <td style={{padding: '7px'}}>{ Users[0].email }</td>
              </tr>
              <tr>
                <td style={{padding: '7px'}}>{ Users[1].name }</td>
                <td style={{padding: '7px'}}>{ Users[1].role }</td>
                <td style={{padding: '7px'}}>{ Users[1].email }</td>
              </tr>
              <tr>
                <td style={{padding: '7px'}}>{ Users[2].name }</td>
                <td style={{padding: '7px'}}>{ Users[2].role }</td>
                <td style={{padding: '7px'}}>{ Users[2].email }</td>
              </tr>
            </table>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default User;
