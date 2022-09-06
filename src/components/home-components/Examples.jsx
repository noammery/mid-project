import "./example.css";
import { useState } from "react";
const Example = () => {
  const img1 = require("./ocean.jpg");
  const img2 = require("./fire.jpg");
  const img3 = require("./food.jpg");
  const img4 = require("./food2.jpg");
  const [imgUrl, setImgUrl] = useState(img1);
  return (
    <div className="Example" id="example">
      <div className="exampletop">
        <div className="homeExample">
          <h1>Activities we participate in:</h1>
          <h3>
            <ul>
              <li>Packing food for people in - need.</li>
              <li>
                Volunteering in emergency institutions such as: Firefighters,
                "Magen David Adom", etc...
              </li>
              <li>Cleaning the ocean.</li>
            </ul>
          </h3>
        </div>
        <div
          className="changing "
          onClick={() => {
            if (imgUrl === img1) {
              setImgUrl(img2);
            }
            if (imgUrl === img2) {
              setImgUrl(img3);
            }
            if (imgUrl === img3) {
              setImgUrl(img4);
            }
            if (imgUrl === img4) {
              setImgUrl(img1);
            }
          }}
        >
          <img className="changingImg" src={imgUrl} alt="" />
        </div>
      </div>
      <div className="exampleBottom">
        <h2>Contact us here</h2>
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
export default Example;
