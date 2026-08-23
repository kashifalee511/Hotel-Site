import Navbar from './Component/Navbar'
import { Route, Routes, useLocation } from "react-router";
import Home from './Pages/Home';
import Room from './Pages/Room';
import Footer from './Component/Footer';
import RoomDetail from './Pages/RoomDetail';
import Mybooking from './Pages/Mybooking';

export default function App() {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return (
    <div>
     {!isOwnerpath && <Navbar/>}
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/rooms' element={<Room/>}/>
       <Route path='/rooms/:id' element={<RoomDetail/>}/>
       <Route path='/my-booking' element={<Mybooking/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}
