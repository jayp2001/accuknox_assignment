import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route> */}
          <Route path='' exact element={<Dashboard />} />
          {/* <Route path='list' exact element={<AgentList />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
