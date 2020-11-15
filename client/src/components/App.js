import React from "react";
import { Browserrouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyles from "../GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <a href="/auth/google">Login with google</a>
    </>
  );
}

export default App;
