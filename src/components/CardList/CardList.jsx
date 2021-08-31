import "./CardList.css";
import CardItem from "../CardItem/CardItem";

function CardList({ contacts }) {
  return (
    <ul className="cards">
      {contacts.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </ul>
  );
}

export default CardList;
