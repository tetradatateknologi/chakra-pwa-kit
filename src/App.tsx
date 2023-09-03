import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
import Register from './pages/register.tsx';
import ForgotPassword from './pages/forgot-password.tsx';
import HomeDefaultAdmin from './pages/admin/home.tsx';
import Trending from './pages/admin/trending.tsx';
import Explore from './pages/admin/explore.tsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Loading from './components/loading.tsx';
import React from 'react';
import FormSample from './pages/admin/form-sample.tsx';
import ChartSample from './pages/admin/chart-sample.tsx';
import Documentation from './pages/admin/documentation.tsx';
import FormAddService from './pages/admin/form-add-service.tsx';
import { useAlert } from './util/useAlert.ts';
import Service from './pages/admin/service.tsx';

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
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

          {/* Admin Pages */}
          <Route path='/admin' element={<HomeDefaultAdmin />} />
          <Route path='/admin/service' element={<Service />} />
          <Route path='/admin/service/new' element={<FormAddService />} />

          {/* Sample Pages */}
          <Route path='/admin/trending' element={<Trending />} />
          <Route path='/admin/explore' element={<Explore />} />
          <Route path='/admin/form' element={<FormSample />} />
          <Route path='/admin/chart' element={<ChartSample />} />
          <Route path='/admin/documentation' element={<Documentation />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
