import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const header = { "access-control-allow-origin": "*" };

  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios.post("https://647d6bbbaf9847108549ae5c.mockapi.io/crud", {
        name: name,
        email: email,
        phone: phone,
        header,
      })
      //   use useNavigate after successfully get the data
      .then(() => {
        history("/read");
        console.log("clicked : data send to backend");
      });
  };

  const handleRead = () => {
    history("/read");
  };

  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <h2>Create Data</h2>
        <button type="submit" onClick={handleRead} className="btn btn-primary">
          List of user
        </button>
      </div>
      <form>
        <div className="mb-3 my-3">
          <label htmlFor="exampleInputUsername" className="form-label">
            Add User Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 my-3">
          <label htmlFor="exampleInputMobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Save
        </button>
        <button
          type="submit"
          onClick={handleRead}
          className="btn btn-secondary mx-3"
        >
          Cancel
        </button>
      </form>
    </>
  );
};
export default Create;
