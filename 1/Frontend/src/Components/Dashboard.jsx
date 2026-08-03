import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h2>Welcome</h2>
      <p>{user?.email}</p>

      <a href="/addbook">Add Books</a>
      <a href="/addstaff">Add New Staff</a>
      <a href="/userlist">Show User's</a>
    </div>
  );
};

export default Dashboard;
