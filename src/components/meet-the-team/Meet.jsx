import { useState } from "react";
import "./meet.css";

const Meet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <div className="Meet">
      <div className="header">
        <h1>Meet the team</h1>
        <h3>
          "individuals can and do make a difference, but it takes a team to
          really mess things up"
        </h3>
        <hr></hr>
      </div>

      <div className="us">
        <div className="meContainer">
          <img
            className="picture picture1"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFlRKcruwdnnA/profile-displayphoto-shrink_200_200/0/1661196640303?e=1668643200&v=beta&t=vE7tKHMxDQeeyEUA1DF6om4ZjQuceduy6gscpv8udAI"
            alt=""
          />
          <div className="me">
            <img
              className="picturePhone"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFlRKcruwdnnA/profile-displayphoto-shrink_200_200/0/1661196640303?e=1668643200&v=beta&t=vE7tKHMxDQeeyEUA1DF6om4ZjQuceduy6gscpv8udAI"
              alt=""
            />
            <h4>NOAM MERY</h4>
            <h5>Founder</h5>
            <p>Im the best - N.Mery</p>
            <button
              className="button"
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            >
              Contact
            </button>
            {isOpen ? <h4>noammery55@gmail.com</h4> : <></>}
          </div>
        </div>
        <div className="meContainer">
          <img
            className="picture picture2"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHOE3yrqsi0Tw/profile-displayphoto-shrink_200_200/0/1661067969817?e=1668643200&v=beta&t=pXH0gxIgKaIjOWbMv9yLAvqnGk4hqrOP8FLQsYqYOSM"
            alt=""
          />
          <div className="me">
            <img
              className="picturePhone"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHOE3yrqsi0Tw/profile-displayphoto-shrink_200_200/0/1661067969817?e=1668643200&v=beta&t=pXH0gxIgKaIjOWbMv9yLAvqnGk4hqrOP8FLQsYqYOSM"
              alt=""
            />
            <h4>OLEG BERGIN</h4>
            <h5>Founder</h5>
            <p>
              Our prime purpose in this life is to help others. And if you can't
              help them, at least don't hurt them. — Dale mami
            </p>
            <button
              className="button"
              onClick={() => (isOpen2 ? setIsOpen2(false) : setIsOpen2(true))}
            >
              Contact
            </button>
            {isOpen2 ? <h4>oleg.bragin.01@gmail.com</h4> : <></>}
          </div>
        </div>
        <div className="meContainer">
          <img
            className="picture picture3"
            src={require("./natalipicture.jpg")}
            alt=""
          />
          <div className="me">
            <img
              className="picturePhone"
              src={require("./natalipicture.jpg")}
              alt=""
            />
            <h4>NATALI ELIAGUYEV</h4>
            <h5>Founder</h5>
            <p>
              Kindness in words creates confidence. Kindness in thinking creates
              profoundness. Kindness in giving creates love. — Lao Tzu
            </p>
            <button
              className="button"
              onClick={() => (isOpen3 ? setIsOpen3(false) : setIsOpen3(true))}
            >
              Contact
            </button>
            {isOpen3 ? <h4>natalinatali597@gmail.com</h4> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Meet;
