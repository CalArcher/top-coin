import React from 'react'
import ReactDOM from "react-dom/client";
import '../src/client/custom.css'
import App from '../src/client/App'
import 'bootstrap/dist/css/bootstrap.min.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);