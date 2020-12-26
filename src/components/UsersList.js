import React from "react";
import '../assets/css/custom.css';

const Users = [
    {name: "Trương Pháp 1", role: "admin", _id: "5fb9daabde3e551940029dae", email: "truongphapdh1@gmail.com"},
    {name: "Trương Pháp 2", role: "admin", _id: "5fb9daabde3e551940029dae", email: "truongphapdh2@gmail.com"},
    {name: "Trương Pháp 3", role: "admin", _id: "5fb9daabde3e551940029dae", email: "truongphapdh3@gmail.com"},
    {name: "Trương Pháp 4", role: "admin", _id: "5fb9daabde3e551940029dae", email: "truongphapdh4@gmail.com"},
  ];
function UsersList() {
  return (
    <table>
      <tr>
        <th>Username</th>
        <th>Role</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>{ Users[0].name }</td>
        <td>{ Users[0].role }</td>
        <td>{ Users[0].email }</td>
      </tr>
      <tr>
        <td>{ Users[1].name }</td>
        <td>{ Users[1].role }</td>
        <td>{ Users[1].email }</td>
      </tr>
      <tr>
        <td>{ Users[2].name }</td>
        <td>{ Users[2].role }</td>
        <td>{ Users[2].email }</td>
      </tr>
      <tr>
        <td>{ Users[3].name }</td>
        <td>{ Users[3].role }</td>
        <td>{ Users[3].email }</td>
      </tr>
    </table>
  );
}

export default UsersList;