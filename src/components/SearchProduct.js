import React from 'react'
import Header from './Header'
import { useState } from 'react'
import Table from "react-bootstrap/Table";

function SearchProduct() {
    const [data,setData]=useState([]);
    async function search(key){
        let result=await fetch("http://127.0.0.1:8000/api/search/"+key);
        result=await result.json();
        setData(result);
    }
    let timeout;
    function debounce(func, delay) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func();
        }, delay);
    }
  return (
    <div>
        <Header/>
        <div className='col-sm-6 offest-sm-3 form'>
            <h1>Search Product</h1>
            <br/>
            <input
                    type='text'
                    className='form-control'
                    onChange={(e) => debounce(() => search(e.target.value), 300)}
                    placeholder='Search Product'
                />
        <br/>
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
                
                
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
    </div>
  )
}

export default SearchProduct