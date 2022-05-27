import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Common/Navbar';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
        <Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Navbar>
    </div>
  );
}

export default App;
