import CardCSS from "./Card.module.css";
//import cardStar from "/public/images/star";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div>
      <div className={CardCSS.mainContainer}>
        <div>
          <div className={CardCSS.badgeContainer}>
            {badgeText === "SOLD OUT" && (
              <div className={CardCSS.cardBadgeSold}>{badgeText}</div>
            )}
            {badgeText === "ONLINE" && (
              <div className={CardCSS.cardBadgeOnline}>{badgeText}</div>
            )}
          </div>

          <img
            className={CardCSS.cardImage}
            src={props.img}
            alt="Image of Katie Zaferes"
          ></img>
        </div>
        <div className={CardCSS.reviewContainer}>
          <img
            className={CardCSS.star}
            src={"/images/star.png"}
            alt="star review"
          ></img>
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
