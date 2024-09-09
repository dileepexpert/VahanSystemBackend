import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './component/login'
import SignUp from './component/signup'
import Home from './component/home';
import Modern from './component/modern';
import Perfect from './component/perfect';
import Quick from './component/quick';
import Member from './component/member';
import Footer from './component/footer';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/modern" element={<Modern/>} />
        <Route path="/perfect" element={<Perfect/>} />
        <Route path="/quick" element={<Quick/>} />
        <Route path="/member" element={<Member/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;