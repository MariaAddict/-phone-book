import "./CardItem.css";
import iconContact from "../../images/avatar.jpg";

function CardItem({ card, onClickEditButton }) {
  const onClick = () => {
    onClickEditButton(card);
  };

  return (
    <li className="card">
      <img
        src={iconContact}
        alt={`avatar ${card.name}`}
        className="card__image"
      />
      <div className="card__description">
        <p className="card__name">
          {card.favorite && <span>⭐</span>} {card.name}
        </p>
        <p>📞 {card.phone}</p>
        <p>🌐 {card.website}</p>
        <p>💼 {card.company.name}</p>
        <p>🏠 {card.address.city}</p>
      </div>

      <button className="card__button" onClick={onClick}>
        Edit
      </button>
    </li>
  );
}

export default CardItem;
