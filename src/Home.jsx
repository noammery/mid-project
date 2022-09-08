import "./home.css";
import About from "./components/home-components/About";
import Example from "./components/home-components/Examples";
import HomeHeader from "./components/home-components/HomeHeader";
import Us from "./components/home-components/Us";
import Animations from "./components/home-components/Animations";

const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <About />
      <Animations />
      <Example></Example>
      <Us />
    </div>
  );
};
export default Home;
