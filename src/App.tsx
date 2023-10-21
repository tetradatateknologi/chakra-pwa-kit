import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAlert } from './util/useAlert.ts';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

import Loading from './components/loading.tsx';
import NotFoundPage from './pages/error/404.tsx';
import Home from './pages/public/home.tsx';

export const Context = React.createContext([])

function App() {
  useAlert.init()
  return (
    <>
      <ToastContainer />
      <Loading />
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path='/' element={<Home />} />

          {/* Error Pages */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
