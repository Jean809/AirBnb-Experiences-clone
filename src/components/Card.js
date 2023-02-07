import CardCSS from "./Card.module.css";
import cardStar from "./images/star.png";

function Card(props) {
  return (
    <div>
      <div className={CardCSS.mainContainer}>
        <div>
          <img
            className={CardCSS.cardImage}
            src={props.img}
            alt="Image of Katie Zaferes"
          ></img>
        </div>
        <div className={CardCSS.reviewContainer}>
          <img className={CardCSS.star} src={cardStar} alt="star review"></img>
          <p className={CardCSS.numberOfReview}>
            {props.rating}{" "}
            <span className={CardCSS.spanNumberOfReview}>
              {" "}
              {props.reviewCount}•{props.country}
            </span>
          </p>
        </div>
        <div>
          <p className={CardCSS.description}>{props.title}</p>
        </div>
        <div>
          <p className={CardCSS.price}>
            <span className={CardCSS.pricePortion}>From {props.price}</span> /
            person
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
