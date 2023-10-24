// import { Routes, Route } from 'react-router-dom'
// import Main from '../Main/Main.jsx'
// import Login from '../Login.jsx'
// import Register from '../Register/Register.jsx'
// import Navbar from '../Navbar/Navbar.jsx'
// import Verified from '../Verified/Verified.jsx'

// function Routes() {
//     return (
//         <>
//             <Navbar/>
//             <Routes>
//                 <Route path='/' element={<Main />} />
//                 <Route path='/login' element={<Login />} />
//                 <Route path='/register' element={<Register />} />
//                 <Route path='/verified' element={<Verified/>}/>
//             </Routes>
//         </>
//     )
// }

// export default Routes;

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, redirectTo}) => {
    const {currentUser} = useSelector((state) => state.user);
  
    return currentUser ? children : <Navigate to={redirectTo}/>
}

export default ProtectedRoute;


