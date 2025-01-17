// import logo from '../src/assets/logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Navagations from './components/Navagations';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Chat from "./pages/Chat"

function App() {
  return (
    <BrowserRouter>
      <Navagations />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
