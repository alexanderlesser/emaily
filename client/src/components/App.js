import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import GlobalStyles from "../GlobalStyles";
import Navbar from "./navbar/Navbar";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import history from "../history";
import { fetchUser } from "../actions";

function App({ fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <GlobalStyles />
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default connect(null, { fetchUser })(App);
