import Links from "./navbar components/Links";
import Logo from "./navbar components/Logo";
import Search from "./navbar components/Search";
import Hamburger from "./navbar components/Hamburger";
import "./navbar.css";
function Navbar() {
  const titledecoration = "solid";
  //box/dotted/solid
  const pageColor = "blue";
  // grey / white / blue / red(default=blank)/deepPurple/maldives/coolGreen
  const logoPosition = "first";
  const linksPosition = "second";
  const searchPosition = "third";
  const hamburgerPosition = "forth";
  // pick the position for each element : first/middle/last
  const navbarPosition = "top";
  // Pick the position of the NAVBAR (top/bottom/right/left)

  return (
    <div className={`navbar ${navbarPosition} ${pageColor}`}>
      <div className={`logoContainer ${logoPosition}`}>
        <Logo
          color={pageColor}
          titledecoration={titledecoration}
          title='"NON" Voulnteer'
        />
        {/* Add you logo URL and your NAVBAR title */}
      </div>
      <div className={`linksContainer ${linksPosition}`}>
        <Links
          navbarPosition={navbarPosition}
          color={pageColor}
          links={[
            { linkTitle: "Home", linkUrl: "/" },
            { linkTitle: "Donate", linkUrl: `donate` },
            { linkTitle: "North ", linkUrl: "north" },
            { linkTitle: "Center ", linkUrl: "center" },
            { linkTitle: "South ", linkUrl: "south" },
            { linkTitle: "Calender ", linkUrl: "calender" },
          ]}
        />
      </div>
      <div className={`searchContainer ${searchPosition}`}>
        <Search color={pageColor} />
      </div>
      <div className={`hamburgercontainer ${hamburgerPosition}`}>
        <Hamburger
          navbarPosition={navbarPosition}
          color={pageColor}
          hamlinks={[
            { hamlinkTitle: "Home", hamlinkUrl: "/" },
            { hamlinkTitle: "Donate", hamlinkUrl: `donate` },
            { hamlinkTitle: "North ", hamlinkUrl: "north" },
            { hamlinkTitle: "Center ", hamlinkUrl: "center" },
            { hamlinkTitle: "South ", hamlinkUrl: "south" },
            { hamlinkTitle: "Calender ", hamlinkUrl: "calender" },
          ]}
        />
      </div>
    </div>
  );
}
export default Navbar;
