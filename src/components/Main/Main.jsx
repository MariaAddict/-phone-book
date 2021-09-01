import "./Main.css";
import CardList from "../CardList/CardList";
import SearchBlock from "../SearchBlock/SearchBlock.jsx";

function Main({
  contacts,
  onClickEditButton,
  handleSubmitSearch,
  foundContacts,
  isNotFound,
}) {
  return (
    <main className="main">
      <SearchBlock onSubmit={handleSubmitSearch} />
      {isNotFound && <p className="main__text-not-found">Nothing found by keyword</p>}
      <CardList
        contacts={foundContacts.length === 0 ? contacts : foundContacts}
        onClickEditButton={onClickEditButton}
      />
    </main>
  );
}

export default Main;
