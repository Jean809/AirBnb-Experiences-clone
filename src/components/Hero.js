import HeroCSS from "./Hero.module.css";
import photoGrid from "./images/photo-grid.png";

function Hero() {
  return (
    <div>
      <div className={HeroCSS.mainContainer}>
        <div className={HeroCSS.photoGridContainer}>
          <img className={HeroCSS.photoGrid} src={photoGrid}></img>
        </div>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
