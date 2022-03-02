import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard/dashboard'
import {UserProvider} from './usercontext';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Userlist from './userlist';
import Usercreate from './usercreate';
import Useredit from './useredit'



export default function App() {
  return (
    
    <Router>
    <div id="wrapper">
      <Sidebar/>
      <UserProvider>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar/>
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard/>} exact={true}/>
                <Route path="/userlist" element={<Userlist/>} exact={true}/>
                <Route path="/userlist/usercreate"  element={<Usercreate/>} exact={true}/>
                <Route path="/userlist/useredit" element={<Useredit/>} exact={true}/>
              </Routes>
            </div>
          </div>
        </div>
        </UserProvider> 
    </div>
    </Router>
  );
}


