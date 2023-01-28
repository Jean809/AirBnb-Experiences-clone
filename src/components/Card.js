import CardCSS from "./Card.module.css";
import cardImage from "./images/katie-zaferes.png";
import cardStar from "./images/star.png";

function Card() {
  return (
    <div>
      <div className={CardCSS.mainContainer}>
        <div>
          <img
            className={CardCSS.cardImage}
            src={cardImage}
            alt="Image of Katie Zaferes"
          ></img>
        </div>
        <div className={CardCSS.reviewContainer}>
          <img className={CardCSS.star} src={cardStar} alt="star review"></img>
          <p className={CardCSS.numberOfReview}>
            5.0 <span className={CardCSS.spanNumberOfReview}>(6)•USA</span>
          </p>
        </div>
        <div>
          <p className={CardCSS.description}>Life lessons with Katie Zaferes</p>
        </div>
        <div>
          <p className={CardCSS.price}>
            <span className={CardCSS.pricePortion}>From $136</span> / person
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
