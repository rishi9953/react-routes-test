import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/routes/Home';
import Employee from './components/routes/Employee';
import RegistrationForm from './components/routes/Form';
import Error from './components/routes/Error';
import Redux from './Redux/Redux';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Profile from './components/Profile';
import Setting from './components/Setting';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import StatefulComponent from './components/Stateful/StatefulComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Dashboard.css';

const App = () => {
  return(
  <div className="app">
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/employee' element={<Employee/>} />
      <Route exact path='/form' element={<RegistrationForm/>} />
      <Route exact path='/redux' element={<Redux/>} />
      <Route exact path='/dashboard' element={<Dashboard/>} />
      <Route exact path='/analytics' element={<Analytics/>} />
      <Route exact path='/profile' element={<Profile/>} />
      <Route exact path='/setting' element={<Setting/>} />
      <Route exact path='/stateful' element={<StatefulComponent/>} />
      <Route element={<Error/>}/>
    </Routes>
    <Header />
    <Sidebar/>
    <Footer/>

  </div>
  );
};  
export default App;
