import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Workshop from "./workshop/Workshop";
import Webinar from "./webinar/Webinar";
import Tree from "./tree/tree";

export const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/tree" element={<Tree />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
