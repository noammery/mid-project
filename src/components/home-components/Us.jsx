import { Link } from "react-router-dom";
import "./us.css";
const Us = () => {
  return (
    <div className="Us">
      <div className="ourContainer">
        <div className="ourOpinion">
          <h2>
            "Volunteering for us is to be a better person. To want to make the
            world a safe and equal place for everyone and to give society a
            feeling that every person is important. We believe that with your
            volunteering and donations you will help us make the world a better
            place!"
          </h2>
          <h5 style={{ opacity: "0.5", textAlign: "center" }}>
            {" "}
            "NON" Team 2022
          </h5>
        </div>
        <img src={require("./us.jpg")} className="ourImg" />
      </div>
      <Link to="donate">
        <h1>SUPPORT US TODAY!</h1>
      </Link>
      <div className="exampleBottom">
        <h2>Contact us via:</h2>
        <div className="footerImgs">
          <a
            href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F%3F__coig_login%3D1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./instagram.jpg")}
              alt=""
              className="footerImg"
            />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("./whatsapp.png")} alt="" className="footerImg" />
          </a>
          <a
            href="http://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("./twitter.png")} alt="" className="footerImg" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Us;
