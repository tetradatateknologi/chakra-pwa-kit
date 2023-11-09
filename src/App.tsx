import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAlert } from './util/useAlert.ts';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

import Loading from './components/other/loading.tsx';
import NotFoundPage from './pages/error/404.tsx';
import Home from './pages/public/home.tsx';
import Feed from './pages/public/feed.tsx';
import Activity from './pages/public/activity.tsx';
import Profile from './pages/public/profile.tsx';
import Blank from './pages/sample/blank.tsx';

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
          <Route path='/feed' element={<Feed />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/profile' element={<Profile />} />

          {/* Sample Pages */}
          <Route path='/sample/blank' element={<Blank />} />

          {/* Error Pages */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
