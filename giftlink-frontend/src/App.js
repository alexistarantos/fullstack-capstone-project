import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Αφαιρέθηκε το useNavigate από εδώ
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  // Η γραμμή 'const navigate = useNavigate();' διαγράφηκε τελείως

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/app" element={<MainPage />} />
        <Route path="/app/login" element={<LoginPage/>} />
        <Route path="/app/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
