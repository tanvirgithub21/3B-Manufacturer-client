import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Common/Navbar';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SingIn from './Pages/SingIn/SingIn';

function App() {
  return (
    <div>
        <Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/singIn' element={<SingIn />} />
          </Routes>
        </Navbar>
    </div>
  );
}

export default App;
