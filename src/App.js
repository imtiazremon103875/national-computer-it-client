
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authetication/Login';
import Register from './Pages/Authetication/Register';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Parchase from './Pages/Parchase/Parchase';
import RequiredAuth from './Pages/Authetication/RequiredAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import NotFound from './Pages/Shared/NotFound';
import Myportfolio from './Pages/My portfolio/Myportfolio';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import RequiredAdmin from './Pages/Authetication/RequiredAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import Manageproduct from './Pages/Dashboard/Manageproduct';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Myportfolio></Myportfolio>}></Route>
        <Route path='/parchase/:id' element={<RequiredAuth><Parchase></Parchase></RequiredAuth>}></Route>
        <Route path='/dashboard' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>

          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequiredAdmin><ManageUsers></ManageUsers></RequiredAdmin>}></Route>
          <Route path='addProduct' element={<RequiredAdmin><AddProduct></AddProduct></RequiredAdmin>}></Route>
          <Route path='manageProduct' element={<RequiredAdmin><Manageproduct></Manageproduct></RequiredAdmin>}></Route>
          <Route path='manageOrders' element={<RequiredAdmin><ManageOrders></ManageOrders></RequiredAdmin>}></Route>

        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
