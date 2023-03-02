import React from "react";
import "./App.css";
import LoginForm from "./Class-component/LoginForm";

import ParentComponent from "./Functional-component/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <LoginForm />
    </div>
  );
  /* return React.createElement('h1',null, "hello world");*/
}

export default App;
