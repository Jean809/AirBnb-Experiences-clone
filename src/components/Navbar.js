import airbnbLogo from "../components/images/Airbnb-logo.png";
import NavbarCSS from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={NavbarCSS.mainContainer}>
        <img
          className={NavbarCSS.airbnbLogo}
          src={airbnbLogo}
          alt="airbnb logo"
        ></img>
      </div>
    </nav>
  );
}

export default Navbar;
