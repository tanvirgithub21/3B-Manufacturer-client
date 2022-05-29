import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Common/Navbar';
import Blog from './Pages/Blog/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOdder from './Pages/Dashboard/ManageOdder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyOdder from './Pages/Dashboard/MyOdder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import SingIn from './Pages/SingIn/SingIn';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Product from './Pages/Product/Product';
import Forgot from './Pages/Login/Forgot';
import ParchasePage from './Pages/ParchasePage/ParchasePage';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ParchasePage />} />

          <Route path='/dashboard' element={<Dashboard />} >
            <Route path="myOdder" element={<MyOdder />} />
            <Route path="myProfile" element={<MyProfile />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="manageOdder" element={<ManageOdder />} />
            <Route path="manageProduct" element={<ManageProduct />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
          </Route>

          <Route path='/myPortfolio' element={<MyPortfolio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/singIn' element={<SingIn />} />
        </Routes>
        <ToastContainer/>
      </Navbar>
    </div>
  );
}

export default App;
