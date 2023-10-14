import React, { useState, useEffect } from "react";
import "../App.css";
import { Link} from "react-router-dom";

const Login = () => {
  const initialValue = { email: "", password: "" };
  const [data, setData] = useState(initialValue);
  const [finalErrors, setFinalErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // console.log(data);
  useEffect(() => {
    alert("new user require signup");
  }, []);

  // useEffect(() => {
  //   if (Object.keys(finalErrors).length === 0 && isSubmit) {
  //     // alert("Login successfull");
  //     console.log("Login successfull");
  //   }
  // }, [finalErrors, isSubmit]);

  const validate = (data) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!data.email) {
      errors.email = "Email address is required !";
    } else if (!regex.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!data.password) {
      errors.password = "please enter password";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFinalErrors(validate(data));
    if (Object.keys(finalErrors).length === 0 && isSubmit) {
      window.location.assign("/read");
    }
    // console.log(finalErrors);
  };

  return (
    <>
      <div className="my-3">
        <section className=" text-center text-lg-start">
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  alt="Trendy Pants and Shoes"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <h1 className="mb-4">Login Page</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="form2Example1"
                        placeholder="email address"
                        className="form-control"
                        onChange={handleChange}
                      />
                      <div className="text-danger">{finalErrors.email}</div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        id="form2Example2"
                        className="form-control"
                        onChange={handleChange}
                      />
                      <div className="text-danger">{finalErrors.password}</div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <button
                        type="submit"
                        className="btn btn-success btn-block mb-4 "
                      >
                        Sign in
                      </button>
                      <Link to="./signup">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-primary btn-block mb-4 "
                        >
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
