import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Alert from "./components/layout/Alert";
import "./App.css";

// redux
import { Provider } from "react-redux";
import store from "./store";
import { loaduser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Navbar from "./components/Navbar";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loaduser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="login-register-container">
          <Route exact path="/" component={Login} />
          <Alert />
          <Route path="/Register" component={Register} />
        </div>
      </Router>
    </Provider>
  );
};
export default App;
