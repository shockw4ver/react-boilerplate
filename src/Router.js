import React from "react";
import { Router } from "@reach/router";

import Home from "@pages/Home";
import Version from "@pages/Version";
/** IMPORT HOLDER **/

const Routes = () => (
  <Router>
    <Home path="/home" />
    <Version path="/version" />
    {/** ROUTE HOLDER **/}
  </Router>
);

export default Routes;
