import "./RecentTripCard.css";

type RecentTripCardType = {
  card_img: string;
  card_heading: string;
  card_description: string;
};

const RecentTripCard = (props: RecentTripCardType) => {
  return (
    <div className="card_component">
      <div className="card_img_container">
        <img src={props.card_img} alt="card-image" />
      </div>

      <div className="text_container">
        <h3 className="card_heading">{props.card_heading}</h3>

        <p className="card_description">{props.card_description}</p>
      </div>
    </div>
  );
};

export default RecentTripCard;
