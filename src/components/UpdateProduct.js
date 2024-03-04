import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

function UpdateProduct(props) {
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    file_path: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch("http://127.0.0.1:8000/api/product/" + id);
      result = await result.json();
      setData(result);
    };
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await fetch(`http://127.0.0.1:8000/api/updateProduct/`+id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      alert("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("An error occurred while updating the product");
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Header />
      <div className="col-md-6 offset-sm-3 form">
        <h1>Update Product</h1>
        <br />
        <input
          type="text"
          className="form-control"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          className="form-control"
          name="price"
          value={data.price}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          className="form-control"
          name="description"
          value={data.description}
          onChange={handleChange}
        />
        <br />
        <img
          style={{ width: 100 }}
          alt="img"
          src={"http://localhost:8000/" + data.file_path}
        />
        <br />
        <input
          type="file"
          className="form-control"
          name="file_path"
          onChange={handleChange}
        />
        <br />
        <button className="btn btn-primary" onClick={handleUpdate}>
          Update Product
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;
