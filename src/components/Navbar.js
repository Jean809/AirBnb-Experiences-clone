//import airbnbLogo from "/public/images/Airbnb-logo.png";
import NavbarCSS from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={NavbarCSS.mainContainer}>
        <img
          className={NavbarCSS.airbnbLogo}
          src={"/images/Airbnb-logo.png"}
          alt={"airbnb logo"}
        ></img>
      </div>
    </nav>
  );
}

export default Navbar;
