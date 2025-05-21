import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import { SocketContextProvider } from './context/SocketContext.jsx'
// import { AuthContextProvider } from './context/AuthContext.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <SocketContextProvider>
       <App />
    </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
