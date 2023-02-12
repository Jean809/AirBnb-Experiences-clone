import HeroCSS from "./Hero.module.css";
//import photoGrid from "/public/images/photo-grid.png";

function Hero() {
  return (
    <div>
      <div className={HeroCSS.mainContainer}>
        <div className={HeroCSS.photoGridContainer}>
          <img
            className={HeroCSS.photoGrid}
            src={"/images/photo-grid.png"}
          ></img>
        </div>
        <h1 className={HeroCSS.title}>Online Experiences</h1>
        <p className={HeroCSS.paragraph}>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
