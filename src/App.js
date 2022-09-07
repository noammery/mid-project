import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/form-components/Form";
import Home from "./Home";
import North from "./components/areas/North";
import Center from "./components/areas/Center";
import South from "./components/areas/South";
import EventList from "./components/event-list-components/EventList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="donate" element={<Form />} />
        <Route path="north" element={<North />} />
        <Route path="center" element={<Center />} />
        <Route path="south" element={<South />} />
        <Route path="calender" element={<EventList />} />
      </Routes>
    </div>
  );
}

export default App;
