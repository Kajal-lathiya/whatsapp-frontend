import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Home/Navbar";

import RouterApi from "./Components/Routers/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {RouterApi.map((navrt) => {
          return (
            <Route key={navrt.id} path={navrt.path} element={navrt.element} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
