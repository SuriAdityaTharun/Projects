import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { Home, SingleCourse, Cart, Courses } from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login1 from './Login';
import Register from './Register';
import ForgotPassword from './Forgotpassword';
import Paymentproceed from './pages/Paymentproceed';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={< Login1 />} />
        <Route path="/Register" element={< Register />} />
        <Route path="/Forgotpassword" element={< ForgotPassword />} />
        <Route path="/HomePage" element={< Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Paymentproceed" element={<Paymentproceed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
