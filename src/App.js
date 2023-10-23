import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Verified from './components/Verified/Verified'
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';



function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/verified' element={<Verified/>}/> */}
        <Route path='/verified/:email' element={<Verified />} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>

    </div>
  );
}

export default App;
