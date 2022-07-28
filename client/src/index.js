import React from 'react'
import ReactDOM from "react-dom/client";
import './custom.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import SetContext from './contexts/DataContext';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SetContext>
      <App />
    </SetContext>
  </React.StrictMode>
);