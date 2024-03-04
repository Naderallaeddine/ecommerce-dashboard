import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: "DELETE",
    });
    /* eslint-disable-next-line no-unused-vars*/
    result = await result.json();
    getData();
  }
  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }
  return (
    <div>
      <Header />
      <div className="col-md-8 offset-md-2">
        <h1>Product List</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>price</th>
              <th>description</th>
              <th>Image</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img
                    style={{ width: 100 }}
                    alt="img"
                    src={"http://localhost:8000/" + item.file_path}
                  />
                </td>
                <td >
                  <Button 
                    onClick={() => deleteOperation(item.id)}
                    variant="outline-danger"
                  >
                    Delete
                  </Button>

                 
                </td>
                <td> <Link to={"update/"+item.id} className="btn btn-outline-success"> Update</Link></td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
