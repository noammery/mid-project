import "./homeheader.css";
import theVideo from "./thevideo.mp4";
const HomeHeader = () => {
  return (
    <div className="HOME">
      <video src={theVideo} autoPlay muted loop className="theVideo" />

      {/* <div className="content">
        <h1>"NON" - volunteer</h1>
      </div> */}
      <div className="smallContent">
        <h2>Let us find your way of helping the comunity</h2>
      </div>
    </div>
  );
};
export default HomeHeader;
