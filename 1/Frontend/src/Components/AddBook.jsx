import React from "react";
import { useState } from "react";

const AddBook = () => {
  const [Form, setform] = useState({
    Title: "",
    Description: "",
    Author: "",
    Price: "",
  });

  const [error, seterror] = useState("");

  const API = "http://localhost:4000/api/v2";

  const onChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!Form.Title || !Form.Description || !Form.Author || !Form.Price) {
      seterror("Filed All form");
    }

    try {
      const res = await fetch(`${API}/Postbook`, {
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
  return <>
    <form onSubmit={handleForm}>
        Title <input type="text" value={Form.Title} onChange={onchange} name="Title" />
        Description <input type="text" value={Form.Description} onChange={onchange} name="Description" />
        Author <input type="text" value={Form.Author} onChange={onchange} name="Author" />
        Price <input type="text" value={Form.Price} onChange={onchange} name="Price" />
        <button type="Submit">Add Book</button>
        {error && <p style={{color:"red"}}>{error}</p>}
    </form>
  </>
};

export default AddBook;
