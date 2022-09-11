import "./logo.css";
function Logo(props) {
  return (
    <div className="logo">
      {/* <img
        // src={require("./ourlogo.jpeg")}
        className={`logoImg ${props.color}`}
        alt=""
      /> */}
      <h2 className={`title ${props.titledecoration} ${props.color}`}>
        {props.title}
      </h2>
    </div>
  );
}
export default Logo;
