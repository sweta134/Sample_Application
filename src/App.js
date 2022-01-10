import React from 'react';
import './App.css';
import './components/css/Main.css'
import Adpage from './components/Adpage';
import MitPage from './components/MitPage';
import Login from './components/Login';
import {Router} from 'react-router'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  // return (
  //   <div className="App">
  //     <Router>
  //       <Route path="/" component={<Login/>}></Route>
  //     </Router>
  //   </div>
  // );
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/adamasuniversity"
            element={<Adpage/>}
          />

          <Route
            path="/mit"
            element={<MitPage/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
