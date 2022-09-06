import "./hamburger.css";
import { useState } from "react";
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
          <div key={index}>
            <a
              href={hamlink.hamlinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`navbarlinks  hover-underline-animation hamlinks ${props.color}`}
            >
              {hamlink.hamlinkTitle}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Hamburger;
