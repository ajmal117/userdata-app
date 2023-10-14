import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import "../Signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // for state
  const options = ["Gujarat", " Maharashtra", "Karnataka"];
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const history = useNavigate();
  //use for data sent to backend
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    catch: "",
    city: "",
    state: "",
  };

  const [formData, setFormData] = useState(initialValue);
  const [finalErrors, setFinalErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  useEffect(() => {
    if (Object.keys(finalErrors).length === 0 && isSubmit) {
      alert("Sign Up successfull & back to login page in 3 sec.");
      // console.log("signUp successfull");
      setInterval(() => {
        history('/')
      }, 3000);
    }
  }, [finalErrors, isSubmit]);

  const validate = (formData) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!formData.name) {
      errors.name = "name is required !";
    }
    if (!formData.email) {
      errors.email = "Email address is required !";
    } else if (!regex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone) {
      errors.phone = "please enter phone number";
    }
    if (!formData.gender) {
      errors.gender = "please select gender";
    }
    if (!formData.city) {
      errors.city = "please select city";
    }
    if (!formData.state) {
      errors.state = "please select state";
    }
    return errors;
  };

  const header = { "access-control-allow-origin": "*" };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFinalErrors(validate(formData));
    console.log(finalErrors);
    console.log(formData);
    if (Object.keys(finalErrors).length === 0 && isSubmit) {
      axios
        .post("https://647d6bbbaf9847108549ae5c.mockapi.io/crud", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          catch: formData.catch,
          city: formData.city,
          state: formData.state,
          header,
        })
        //window switch after successfully data stored
        .then(() => {
          // console.log(formData);
          console.log("clicked : data send to backend");
          alert("data store successfull");
        });
    }
    else{
      alert("Please fill all the input fields")
    }
  };


  useEffect(() => {
    console.log(formData);
  }, [formData]);
  
  const suggestions = options.filter((option) =>
    option.toLowerCase().includes(formData.state.toLowerCase())
  );

  const autocompleteRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleSuggestionClick = (suggetion) => {
    setValue(suggetion);
    setShowSuggestions(false);
  };

  return (
    <>
      <section className="h-100 bg-dark ">
        <div className=" py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt=""
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>

                  <div className="col-xl-6">
                    <form action="" onSubmit={handleSubmit}>
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase">Sign Up</h3>

                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <div className="form-outline">
                              <label
                                className="form-label"
                                htmlFor="form3Example1m"
                              >
                                name
                              </label>
                              <input
                                type="text"
                                name="name"
                                onChange={handleFormChange}
                                id="form3Example1m"
                                className="form-control form-control-lg "
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <label
                              className="form-label"
                              htmlFor="form3Example1m1"
                            >
                              Email Address
                            </label>
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1m1"
                                name="email"
                                onChange={handleFormChange}
                                className="form-control form-control-lg"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example8">
                            Phone Number
                          </label>
                          <input
                            type="number"
                            name="phone"
                            onChange={handleFormChange}
                            id="form3Example8"
                            className="form-control form-control-lg"
                          />
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              onChange={handleFormChange}
                              id="femaleGender"
                              value="Female"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="femaleGender"
                            >
                              Female
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              onChange={handleFormChange}
                              id="maleGender"
                              value="male"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="maleGender"
                            >
                              Male
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              onChange={handleFormChange}
                              id="otherGender"
                              value="other"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="otherGender"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <p>How did you hear about this? </p>
                          <div className="col-md-3 mb-4">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                name="catch"
                                onChange={handleFormChange}
                                value="Linked In"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Linked In
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3 mb-4">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="catch"
                                onChange={handleFormChange}
                                id="exampleCheck1"
                                value="Friends"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Friends
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3 mb-4">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="catch"
                                onChange={handleFormChange}
                                id="exampleCheck1"
                                value="Job portal"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Job portal
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3 mb-4">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="catch"
                                onChange={handleFormChange}
                                id="exampleCheck1"
                                value="Others"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                others
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select
                              className="select"
                              name="city"
                              onChange={handleFormChange}
                            >
                              <option value="1">Select City</option>
                              <option value="Mumbai">Mumbai</option>
                              <option value="Pune">Pune</option>
                              <option value="Ahmedabad"> Ahmedabad</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="autocomplete mb-4"
                            ref={autocompleteRef}
                          >
                            <input
                              type="text"
                              name="state"
                              value={value}
                              onChange={handleFormChange}
                              placeholder="Select State"
                              onFocus={() => setShowSuggestions(true)}
                            />
                            {showSuggestions && (
                              <ul className="list-group col-md-6">
                                {suggestions.map((suggestion) => (
                                  <li
                                    className="list-group-item"
                                    onClick={() =>
                                      handleSuggestionClick(suggestion)
                                    }
                                    key={suggestion}
                                  >
                                    {suggestion}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="submit"
                            className="btn btn-warning btn-lg ms-2"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
