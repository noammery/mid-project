import "./hamburger.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Hamburger(props) {
  const [visible, setVisible] = useState("false");
  return (
    <div className="hamburger">
      <h1
        className={`dots  ${props.color}`}
        onClick={() => {
          visible === "false" ? setVisible("true") : setVisible("false");
        }}
      >
        |||
      </h1>

      <div
        className={` hamburgerdiv  ${props.color} ${visible} ${props.navbarPosition} ${visible}`}
      >
        {props.hamlinks.map((hamlink, index) => (
          <div
            key={index}
            className="hamLinksContainer"
            onClick={() => setVisible("false")}
          >
            <Link
              to={hamlink.hamlinkUrl}
              className={`navbarlinks hover-underline-animation ${props.color}`}
            >
              {hamlink.hamlinkTitle}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Hamburger;
