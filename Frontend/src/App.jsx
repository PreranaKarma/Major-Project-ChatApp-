// import { useState } from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/home/Home';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/signup/SignUp';
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext';

function App() {

  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"} /> } />
        <Route path='/login' element={authUser ? <Navigate to="/"/> : <LogIn /> } />
        <Route path='/signup' element={authUser ? <Navigate to="/"/> :  <SignUp /> } />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
