import "./homeheader.css";
import theVideo from "./thevideo.mp4";
const HomeHeader = () => {
  return (
    <div className="HOME">
      <video src={theVideo} autoPlay muted loop className="theVideo" />

      {/* <div className="content">
        <h1>"NON" - volunteer</h1>
      </div> */}
      <div className="headerContant">
        <img src={require("./ourlogo.png")} alt="" className="ourLogo1" />
        <div className="smallContent">
          <h1>Let us find your way of helping the comunity </h1>
        </div>
        <img src={require("./ourlogo.png")} alt="" className="ourLogo2" />
      </div>
    </div>
  );
};
export default HomeHeader;
