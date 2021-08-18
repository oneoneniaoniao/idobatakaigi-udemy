import React, { useState } from "react";
import { Main } from "./Main";

import SignIn from "./SignIn";
import config from "../config.json";

export default () => {
  const [name, setName] = useState("");
  if (name === "" && config.signInEnable) {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} setName={setName}/>;
  }
};
