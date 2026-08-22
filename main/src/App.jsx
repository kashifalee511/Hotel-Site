import Navbar from './Component/Navbar'
import { Route, Routes, useLocation } from "react-router";
import Home from './Pages/Home';

export default function App() {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return (
    <div>
     {!isOwnerpath && <Navbar/>}
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  )
}
