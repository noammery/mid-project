import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/form-components/Form";
import Home from "./Home";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="donate" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
