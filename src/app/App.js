import React from "react";
import { memo } from "react";
import { BrowserRouter } from "react-router-dom";

import SimpleTabs from "../components/TabPanel/SimpleTabs";

function App() {
  return (
    <BrowserRouter>
      <SimpleTabs />
    </BrowserRouter>
  );
}

export default memo(App);
