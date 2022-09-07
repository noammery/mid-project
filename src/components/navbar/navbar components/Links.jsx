import { Link } from "react-router-dom";
import "./links.css";
function Links(props) {
  return (
    <div className={`links ${props.navbarPosition}`}>
      {props.links.map((link, index) => (
        <div key={index}>
          <Link
            to={link.linkUrl}
            className={`navbarlinks hover-underline-animation ${props.color}`}
          >
            {link.linkTitle}
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Links;
