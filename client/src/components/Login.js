import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };
  // Redirect to dashboard if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={e => onSubmit(e)}>
          <h1>Sign In</h1>
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
          <span>Or use your account</span>
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
            onChange={e => onChange(e)}
          />
          <button type="submit">Sign IN</button>
        </form>
      </div>
      <div className="login-overlay-container">
        <img src="https://www.linkedout.fr/wp-content/themes/linkedout/assets/img/logo-text.png" />
        <h1>Hello, Friends!</h1>
        <span>Enter your personal details and start journey with us</span>
        <Link to="/Register">
          <button className="ghost" id="signUp">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
