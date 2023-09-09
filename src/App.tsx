import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
import Register from './pages/register.tsx';
import ForgotPassword from './pages/forgot-password.tsx';
import HomeDefaultAdmin from './pages/admin/home.tsx';
import Trending from './pages/admin/sample/trending.tsx';
import Explore from './pages/admin/sample/explore.tsx';
import Loading from './components/loading.tsx';
import FormSample from './pages/admin/sample/form-sample.tsx';
import ChartSample from './pages/admin/sample/chart-sample.tsx';
import Documentation from './pages/admin/sample/documentation.tsx';
import ServiceCreate from './pages/admin/service/create.tsx';
import Service from './pages/admin/service/index.tsx';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useAlert } from './util/useAlert.ts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';
import ServiceUser from './pages/user/service/index.tsx';
import Profile from './pages/user/profile.tsx';
import ServiceDetail from './pages/user/service/detail.tsx';
import HomeDefaultUser from './pages/user/home.tsx';
import NotFoundPage from './pages/error/404.tsx';

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
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

          {/* Admin Pages */}
          <Route path='/dashboard/admin' element={<HomeDefaultAdmin />} />
          <Route path='/admin/service' element={<Service />} />
          <Route path='/admin/service/create' element={<ServiceCreate />} />

          {/* User Pages */}
          <Route path='/dashboard/user' element={<HomeDefaultUser />} />
          <Route path='/user/service' element={<ServiceUser />} />
          <Route path='/user/service/:id' element={<ServiceDetail />} />
          <Route path='/profile' element={<Profile />} />

          {/* Sample Pages */}
          <Route path='/sample/trending' element={<Trending />} />
          <Route path='/sample/explore' element={<Explore />} />
          <Route path='/sample/form' element={<FormSample />} />
          <Route path='/sample/chart' element={<ChartSample />} />
          <Route path='/sample/documentation' element={<Documentation />} />
          <Route path='/sample/landing-page' element={<Home />} />

          {/* Error Pages */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
