import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);

  const geteData = () => {
    axios
      .get("https://647d6bbbaf9847108549ae5c.mockapi.io/crud")
      .then((res) => {
        setData(res.data);
        console.log("response :", res);
      });
  };
  useEffect(() => {
    geteData();
    alert("wait a moment, data is loading...");
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`https://647d6bbbaf9847108549ae5c.mockapi.io/crud/${id}`)
      .then(() => {
        geteData();
      });
    console.log("data deleted");
  };

  const handleEdit = (id, name, email, phone) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
  };

  return (
    <>
      <div className="d-flex justify-content-between my-3">
        <h2>List Of Data</h2>
        <Link to="/create">
          <button className="btn btn-success">Create User </button>
        </Link>
        <Link to="/">
          <button className="btn btn-success">Log out</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile number</th>
            <th scope="col">Op1</th>
            <th scope="col">Op2</th>
          </tr>
        </thead>

        {data.map((item) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          handleEdit(
                            item.id,
                            item.name,
                            item.email,
                            item.phone
                          );
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}

export default Read;
