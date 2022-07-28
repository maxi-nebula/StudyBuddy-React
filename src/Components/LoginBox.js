import React, { useState } from "react";
import "./LoginBox.css";
import PropTypes from "prop-types";
import HD7 from "../images/HD7.jpg";
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const LoginBox = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div>
      <img className="img1" src={HD7} alt={"study4"} />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              type="email"
              placeholder="Email / Username"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-field">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />{" "}
          </div>

          <div className="form-field">
            <button className="btn" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
LoginBox.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default LoginBox;
