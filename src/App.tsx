import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppLayout from "./layouts/app";
import NotFoundPage from "./pages/error/404";
import HomePages from "./pages/public/home";
import ContentPages from "./pages/public/content";

export const Context = React.createContext([]);

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePages />} />
            <Route path="content" element={<ContentPages />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
