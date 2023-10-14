import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const header = { "access-control-allow-origin": "*" };
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem("phone"));
  }, []);

  const handleUpdate = (e) => {
    console.log("clicked");
    e.preventDefault();
    axios
      .put(`https://647d6bbbaf9847108549ae5c.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
        phone: phone,
        header,
      })
      //   use useNavigate after successfully update the data
      .then(() => {
        console.log("data updated");
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3 my-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Mobile
          </label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="submit"
          onClick={handleUpdate}
          className="btn btn-primary"
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Update;
