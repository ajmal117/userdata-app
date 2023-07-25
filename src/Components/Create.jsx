import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const header = { "access-control-allow-origin": "*" };

  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("https://647d6bbbaf9847108549ae5c.mockapi.io/crud", {
        name: name,
        email: email,
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
    <h2>Create Data</h2>
      <form>
        <div className="mb-3 my-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
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
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
        <button
          type="submit"
          onClick={handleRead}
          className="btn btn-secondary mx-3">
          Read The Data
        </button>
      </form>
    </>
  );
};
export default Create;
