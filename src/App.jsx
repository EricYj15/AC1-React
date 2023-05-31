import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Sobre" element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
