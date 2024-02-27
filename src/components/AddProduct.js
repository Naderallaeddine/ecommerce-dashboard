import React from "react";
import Header from "./Header";
import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addProduct() {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });
    alert("Product Saved");
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="col-md-4 offest-sm-3 form">
        <h1>Add Product</h1>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Name"
        />
        <br />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control"
          placeholder="choose file"
        />
        <br />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          placeholder="price"
        />
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="description"
        />
        <br />
        <button onClick={addProduct} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
