import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Page404 from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<Page404 />} />,
            <Route path={"*"} element={<Navigate to="/404" />} />,
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
