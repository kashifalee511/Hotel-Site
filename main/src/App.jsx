import Navbar from './Component/Navbar'
import { Route, Routes, useLocation } from "react-router";
import Home from './Pages/Home';
import Room from './Pages/Room';
import Footer from './Component/Footer';

export default function App() {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return (
    <div>
     {!isOwnerpath && <Navbar/>}
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/rooms' element={<Room/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}
