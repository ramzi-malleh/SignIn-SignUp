import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
      console.log("Success");
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="register-container">
      <div className="register-overlay-container">
        <img src="https://www.linkedout.fr/wp-content/themes/linkedout/assets/img/logo-text.png" />
        <h1>Welcome Back!</h1>
        <span>
          To keep connected with us please login with your personal info
        </span>
        <Link to="/">
          <button className="ghost" id="signUp">
            Sign In
          </button>
        </Link>
      </div>
      <div className="form-container">
        <form onSubmit={e => onSubmit(e)}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>Or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            required
            onChange={e => onChange(e)}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            required
            onChange={e => onChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            minLength="8"
            required
            onChange={e => onChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            minLength="8"
            required
            onChange={e => onChange(e)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
