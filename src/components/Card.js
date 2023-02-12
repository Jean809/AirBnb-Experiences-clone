import CardCSS from "./Card.module.css";

//import cardStar from "/public/images/star";

function Card(props) {
  let badgeText;
  if (props.info.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.info.location === "Online") {
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

          <a href={props.info.link}>
            <img
              className={CardCSS.cardImage}
              src={props.info.coverImg}
              alt="Image of Katie Zaferes"
            ></img>
          </a>
        </div>
        <div className={CardCSS.reviewContainer}>
          <img
            className={CardCSS.star}
            src={"/images/star.png"}
            alt="star review"
          ></img>
          <p className={CardCSS.numberOfReview}>
            {props.info.stats.rating.toFixed(1)}{" "}
            <span className={CardCSS.spanNumberOfReview}>
              {" "}
              {props.info.stats.reviewCount}•{props.info.location}
            </span>
          </p>
        </div>
        <div>
          <p className={CardCSS.description}>{props.info.title}</p>
        </div>
        <div>
          <p className={CardCSS.price}>
            <span className={CardCSS.pricePortion}>
              From {`$${props.info.price}`}
            </span>{" "}
            / person
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
