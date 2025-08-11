import Home from "@/pages/public/home.tsx";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppLayout from "./layouts/app";

export const Context = React.createContext([]);

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
