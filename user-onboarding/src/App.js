import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import * as Yup from "yup";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
