import React from 'react'
import ReactDOM from "react-dom/client";
import './components/custom.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);