import airbnbLogo from "./images/Airbnb-logo.png";
import NavbarCSS from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={NavbarCSS.mainContainer}>
        <img
          className={NavbarCSS.airbnbLogo}
          src={airbnbLogo}
          alt={airbnbLogo}
        ></img>
      </div>
    </nav>
  );
}

export default Navbar;
