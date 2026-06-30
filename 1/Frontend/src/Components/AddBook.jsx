import React, { useEffect } from "react";
import { useState } from "react";

const AddBook = () => {
  const [Form, setform] = useState({
    Title: "",
    Description: "",
    Author: "",
    Price: "",
  });

  const [get, setget] = useState([]);

  const [error, seterror] = useState("");

  const API = "http://localhost:4000/api/v2";

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setform({ ...Form, [name]: value });
  };

  const getBook = async () => {
    try {
      const res = await fetch(`${API}/bookget`);
      const result = await res.json();
      setget(result);
    } catch (err) {
      console.log(err);

      seterror("Failed TO get data");
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();

    if (!Form.Title || !Form.Description || !Form.Author || !Form.Price) {
      seterror("Filed All form");
    }

    try {
      const res = await fetch(`${API}/bookpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Title: Form.Title,
          Description: Form.Description,
          Author: Form.Author,
          Price: Form.Price,
        }),
      });

      getBook();  
      const data = await res.json();
      if (!res.ok) {
        seterror(data.message);
        return;
      }

      alert("Successfully");
      seterror("");
    } catch (err) {
      console.log(err);
      seterror("Server Side error");
    }
  };
  return (
    <>
      <div className="container-bookadd">
        <form onSubmit={handleForm}>
        Title{" "}
        <input
          type="text"
          value={Form.Title}
          onChange={handleOnchange}
          name="Title"
        />
        Description{" "}
        <input
          type="text"
          value={Form.Description}
          onChange={handleOnchange}
          name="Description"
        />
        Author{" "}
        <input
          type="text"
          value={Form.Author}
          onChange={handleOnchange}
          name="Author"
        />
        Price{" "}
        <input
          type="text"
          value={Form.Price}
          onChange={handleOnchange}
          name="Price"
        />
        <button type="Submit">Add Book</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      
      </div>
      <div className="detailed-container">
        <table cellPadding={10} border={1}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Author</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {get.map((item, index)=>(
              <tr key={index}>
                <td>{item.Title}</td>
                <td>{item.Description}</td>
                <td>{item.Author}</td>
                <td>{item.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddBook;
