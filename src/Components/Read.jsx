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
  const handleDelete = (id) => {
    axios
      .delete(`https://647d6bbbaf9847108549ae5c.mockapi.io/crud/${id}`)
      .then(() => {
        geteData();
      });
    console.log("data deleted");
  };

  useEffect(() => {
    geteData();
  }, []);

  const handleSave = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="d-flex justify-content-between my-3">
        <h2>List Of Data</h2>
        <Link to="/">
          <button className="btn btn-success">Create</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
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
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          handleSave(item.id, item.name, item.email);
                        }}>
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(item.id);
                      }}>
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
