import Links from "./navbar components/Links";
import Logo from "./navbar components/Logo";
import Search from "./navbar components/Search";
// import Hamburger from "./navbar components/Hamburger";
import "./navbar.css";
function Navbar() {
  const titledecoration = "solid";
  //box/dotted/solid
  const pageColor = "blue";
  // grey / white / blue / red(default=blank)/deepPurple/maldives/coolGreen
  const logoPosition = "first";
  const linksPosition = "second";
  const searchPosition = "third";
  // const hamburgerPosition = "forth";
  // pick the position for each element : first/middle/last
  const navbarPosition = "top";
  // Pick the position of the NAVBAR (top/bottom/right/left)

  return (
    <div className={`navbar ${navbarPosition} ${pageColor}`}>
      <div className={`logoContainer ${logoPosition}`}>
        <Logo
          color={pageColor}
          titledecoration={titledecoration}
          // logo="https://media-exp1.licdn.com/dms/image/C4E03AQE4v2dzOUokoA/profile-displayphoto-shrink_400_400/0/1661065309729?e=1668038400&v=beta&t=YMU5U4HqF0qFQmAvAohUfjrbEXAOzqkahqVEjbqnnxU"
          title='"NON" Voulnteer'
        />
        {/* Add you logo URL and your NAVBAR title */}
      </div>
      <div className={`linksContainer ${linksPosition}`}>
        <Links
          navbarPosition={navbarPosition}
          color={pageColor}
          links={[
            { linkTitle: "Top", linkUrl: "" },
            { linkTitle: "About us", linkUrl: `#about` },
            { linkTitle: "Examples ", linkUrl: "#example" },
          ]}
        />
      </div>
      <div className={`searchContainer ${searchPosition}`}>
        <Search color={pageColor} />
      </div>
      {/* <div className={`hamburgercontainer ${hamburgerPosition}`}>
        <Hamburger
          navbarPosition={navbarPosition}
          color={pageColor}
          hamlinks={[
            {
              hamlinkTitle: "Model Y",
              hamlinkUrl: "https://www.tesla.com/he_il/modely",
            },
            { hamlinkTitle: "Model X", hamlinkUrl: "" },
            { hamlinkTitle: "Model 3 ", hamlinkUrl: "" },
            { hamlinkTitle: "Model S", hamlinkUrl: "" },
          ]}
        />
      </div> */}
    </div>
  );
}
export default Navbar;
