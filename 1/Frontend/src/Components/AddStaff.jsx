import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AddStaff = () => {
  const [form, setform] = useState({
    Name: "",
    Salary: "",
    Age: "",
    Phone: "",
  });

  const [data, setdata] = useState([]);

  const GetStaff = "http://localhost:4000/api/v2/viewstaff";

  const [error, seterror] = useState("");

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const getData = async () => {
    const res = await fetch(GetStaff);
    const result = await res.json();
    setdata(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!form.Name || !form.Phone || !form.Salary || !form.Age) {
      seterror("Fill all detailed");
    }

    const API = "http://localhost:4000/api/v2";

    try {
      const res = await fetch(`${API}/staffpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        seterror(data.message);
        return;
      }

      getData();
      // setform();
    } catch (err) {
      seterror(err, "error from handler form");
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        Name:{" "}
        <input
          type="text"
          value={form.Name}
          name="Name"
          onChange={handleOnchange}
        />
        Salary :{" "}
        <input
          type="text"
          value={form.Salary}
          name="Salary"
          onChange={handleOnchange}
        />
        Age :{" "}
        <input
          type="text"
          value={form.Age}
          name="Age"
          onChange={handleOnchange}
        />
        Phone :{" "}
        <input
          type="text"
          value={form.Phone}
          name="Phone"
          onChange={handleOnchange}
        />
        <button type="submit">Add staff</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <div className="viewContainer">
        <table cellPadding={10} border={1} >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Age</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.Name}</td>
                <td>{item.Salary}</td>
                <td>{item.Age}</td>
                <td>{item.Phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddStaff;
