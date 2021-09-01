import "./CardList.css";
import CardItem from "../CardItem/CardItem";

function CardList({ contacts, onClickEditButton }) {
  return (
    <ul className="cards">
      {contacts.map((card) => (
        <CardItem key={card.id} card={card} onClickEditButton={onClickEditButton} />
      ))}
    </ul>
  );
}

export default CardList;
