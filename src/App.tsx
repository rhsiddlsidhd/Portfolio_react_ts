import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Header from "./layout/header/Header";

const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Main />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
