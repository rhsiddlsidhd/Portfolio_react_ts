import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import YoutubeMain from "./pages/Youtube/main/YoutubeMain";
import YoutubeHeader from "./layout/Youtube/header/YoutubeHeader";

const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: "#0f0f0f" }}>
      <BrowserRouter>
        <Routes>
          <Route element={<YoutubeHeader />}>
            <Route path="/" element={<YoutubeMain />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
