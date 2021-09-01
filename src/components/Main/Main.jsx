import "./Main.css";
import CardList from "../CardList/CardList";

function Main({ contacts, onClickEditButton }) {
  return (
    <main className="main">
      <CardList contacts={contacts} onClickEditButton={onClickEditButton} />
    </main>
  );
}

export default Main;
