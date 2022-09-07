import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from './components/form-components/Form';
import Home from './Home'



function App() {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="donate" element={<Form />} />
      </Routes>

      

    </div>
  );
}

export default App;
