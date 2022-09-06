import "./App.css";
import Form from './components/form-components/Form';
import Home from './Home'
import Center from "./Center";
import North from "./North";
import "./north.css";
import "./south.css";
import "./center.css";
import South from "./South";

function App() {
  return (
    <div>
      <Home />
      <Form></Form>
      <North />
      <South />
      <Center />
    </div>
  );
}

export default App;