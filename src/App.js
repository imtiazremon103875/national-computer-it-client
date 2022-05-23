
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authetication/Login';
import Register from './Pages/Authetication/Register';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Parchase from './Pages/Parchase/Parchase';
import RequiredAuth from './Pages/Authetication/RequiredAuth';

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
        <Route path='/parchase/:id' element={<RequiredAuth><Parchase></Parchase></RequiredAuth>}></Route>
      </Routes>

    </div>
  );
}

export default App;
