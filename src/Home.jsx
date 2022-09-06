import "./home.css";
import About from "./components/home-components/About";
import Example from "./components/home-components/Examples";
import HomeHeader from "./components/home-components/HomeHeader";
import Navbar from "./components/navbar/Navbar";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <HomeHeader />
      <About />
      <Example></Example>
    </div>
  );
};
export default Home;
