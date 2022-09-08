import "./animations.css";
const Animations = () => {
  return (
    <div className="Animations">
      <div className="runningLine">
        <div className="one">
          <span>
            <img src={require("./dogscontrol.png")} alt="" className="imges" />
            <img src={require("./Mabrok.png")} alt="" className="imges" />
            <img src={require("./MDA.png")} alt="" className="imges" />
            <img src={require("./dogscontrol.png")} alt="" className="imges" />
          </span>
        </div>
        <div className="one two">
          <span>
            <img src={require("./Mabrok.png")} alt="" className="imges" />
            <img src={require("./carmel.png")} alt="" className="imges" />
            <img src={require("./dogscontrol.png")} alt="" className="imges" />
            <img src={require("./MDA.png")} alt="" className="imges" />
          </span>
        </div>
      </div>
      <div className="runningLineOpposite">
        <div className="oneOpposite">
          <span>
            <img src={require("./soroka.png")} alt="" className="imges" />
            <img src={require("./drugs.png")} alt="" className="imges" />
            <img src={require("./live.png")} alt="" className="imges" />
            <img src={require("./red.png")} alt="" className="imges" />
          </span>
        </div>
        <div className="oneOpposite two">
          <span>
            <img src={require("./drugs.png")} alt="" className="imges" />
            <img src={require("./soroka.png")} alt="" className="imges" />
            <img src={require("./red.png")} alt="" className="imges" />
            <img src={require("./live.png")} alt="" className="imges" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Animations;
