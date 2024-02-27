import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch("http://127.0.0.1:8000/api/list");
      result = await result.json();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <div className='col-md-8 offset-md-2'>
      <h1 >Product List</h1>

      <Table striped bordered hover>
        <thead>
          <tr >
            <th>id</th>
            <th>Name</th>
            <th>price</th>
            <th>description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td><img style={{ width:100}} src={"http://localhost:8000/"+item.file_path}/></td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default ProductList;
