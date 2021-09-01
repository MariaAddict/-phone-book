import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import apiContact from '../../utils/apiContact';
import Main from '../Main/Main';
import ModalEditContact from '../ModalEditContact/ModalEditContact';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentDataContact, setCurrentDataContact] = useState({
    name: "",
    phone: "",
    website: "",
    company: "",
    city: "",
    id: "",
    favorite: false,
  });
  const [isOpenModalEditContact, setIsOpenModalEditContact] = useState(false);
  const [foundContacts, setFoundContact] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);

  const onClickEditButton = (data) => {
    setIsOpenModalEditContact(true);
    setCurrentDataContact({
      name: data.name,
      phone: data.phone,
      email: data.email,
      website: data.website,
      company: data.company,
      city: data.city,
      id: data.id,
      favorite: data.favorite,
    });
  }

  const updateDataContact = (contact) => {
    const editedСontacts = contacts.map((contactItem) =>
      contactItem.id === contact.id ? contact : contactItem
    )
    setContacts(editedСontacts);
    localStorage.setItem("contacts", JSON.stringify(editedСontacts));
    setIsOpenModalEditContact(false);
  }

  const closeModal = () => {
    setIsOpenModalEditContact(false);
  }

  const wordCheck = (dataContact, word) => {
    return Object.keys(dataContact).some(key => {
      switch (typeof dataContact[key]) {
        case 'object': return Array.isArray(dataContact[key]) ? false : wordCheck(dataContact[key], word);
        case 'string': return dataContact[key].toLowerCase().includes(word.toLowerCase());
        default: return false;
      }
    })
  }

  const handleSubmitSearch = (searchWord) => {
    setIsNotFound(false);
    if (searchWord === "") {
      setFoundContact([]);
    } else {
      const filtredContacts = contacts.filter(dataContact => {
        return wordCheck(dataContact, searchWord);
      });
      if (filtredContacts.length === 0) {
        setIsNotFound(true);
      }
      setFoundContact(filtredContacts);
    }
  }

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));

    if (savedContacts) {
      setContacts(savedContacts);
    } else {
      apiContact.getContacts().then(receivedСontacts => {
        const newСontacts = receivedСontacts.map(contact => ({
          name: contact.name,
          phone: contact.phone,
          email: contact.email,
          website: contact.website,
          company: contact.company.name,
          city: contact.address.city,
          id: contact.id,
          favorite: contact.favorite,
        }));
        setContacts(newСontacts);
        localStorage.setItem("contacts", JSON.stringify(newСontacts));
      }).catch(err => console.log(err))
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Main contacts={contacts} onClickEditButton={onClickEditButton} handleSubmitSearch={handleSubmitSearch} foundContacts={foundContacts} isNotFound={isNotFound}/>
      <ModalEditContact updateDataContact={updateDataContact} isOpen={isOpenModalEditContact} onClose={closeModal} card={currentDataContact} />
    </div>
  );
}

export default App;
