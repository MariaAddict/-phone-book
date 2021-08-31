import "./Main.css";
import CardList from '../CardList/CardList';

function Main({contacts}) {
  return (
    <main className="main">
      <CardList contacts={contacts} />
    </main>
  );
}

export default Main;
