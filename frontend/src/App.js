import {Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Info from './pages/Info';
import ThankYou from './pages/ThankYou';
import './index.css'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Info' element={<Info/>} />
        <Route path='/thankYou' element={<ThankYou/>} />

      </Routes>

    </div>
  );
}

export default App;
