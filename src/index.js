import React from "react"
import * as ReactDOM from 'react-dom/client';
import TodoContainer from "./functionBased/components/TodoContainer";
import "./functionBased/App.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>
);
