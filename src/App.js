import "./App.css";
import Center from "./Center";
import North from "./North";
import "./north.css";
import "./south.css";
import "./center.css";
import South from "./South";

function App() {
  return (
    <div className="App">
      <North />
      <South />
      <Center />
    </div>
  );
}

export default App;
