import { useEffect } from "react";
import { useRef, useState } from "react";
import "./about.css";

const About = () => {
  const MyRef = useRef();
  const [animationstart, setAnimationStart] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setAnimationStart(entry.isIntersecting);
    });
    observer.observe(MyRef.current);
  });
  console.log(animationstart);
  return (
    <div className="aboutandnav" id="about">
      <div className={`About ${animationstart}`} ref={MyRef}>
        <div>
          <h1>About - us:</h1>
          <div>
            <h2>Who we are?</h2>
            <p>
              We are "NON". A volunteer company that supports special
              populations that require help and personal care. The members of
              the group are highly socially aware and are always happy to offer
              help. The organization is intended for the purpose of donation
              only without personal profits.{" "}
            </p>
          </div>
          <hr />
          <div>
            <h2>What are we searching for?</h2>
            <p>
              We are looking for people who like to help, who have a high
              volunteering spirit and of course a big heart. If you want to join
              contact us soon!
            </p>
          </div>
        </div>
      </div>
      <img
        src={require("./firstimg.jpg")}
        className={`aboutImg ${animationstart}`}
        alt=""
      />
    </div>
  );
};
export default About;
