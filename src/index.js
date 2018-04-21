import React from "react";
import ReactDOM from "react-dom";

import css from "./index.css";

const Index = () => {
  return <div className={css.app}>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("app"));
