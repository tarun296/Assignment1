import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from './component/Home/Home';
import About from './component/pages/About';
import Destination from './component/pages/Destination';
//import Contact from './pages/contact';
// import SignUp from './pages/signup';
// import SignIn from './pages/signin';

function App() {
  return (
    <BrowserRouter>    
     <div>
            <img style={{marginLeft:'40%'}}  src="./image1.jpg"></img>
            <Navbar></Navbar>
    
           
        </div>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/philippines Cruises" element={<philippinesCruises />} />
        <Route path="/miceandWedding" element={<miceandwedding />} />
        <Route path="/ultra Luxary" element={<ultraLuxary />} />
        <Route path="/contact" element={<contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
