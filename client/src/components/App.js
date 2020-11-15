import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import Navbar from "./navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
