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
  });
  const [isOpenModalEditContact, setIsOpenModalEditContact] = useState(false);

  const onClickEditButton = (data) => {
    setIsOpenModalEditContact(true);
    setCurrentDataContact({
      name: data.name,
      phone: data.phone,
      website: data.website,
      company: data.company.name,
      city: data.address.city,
      id: data.id,
    });
  }

  const updateDataContact = (contact) => {
    const editedСontacts = contacts.map((contactItem) => 
      contactItem.id === contact.id ? contact : contactItem
    )
    setContacts(editedСontacts);
    localStorage.setItem("contacts", JSON.stringify([contact, ...contacts]));
    setIsOpenModalEditContact(false);
  }

  const closeModal = () => {
    setIsOpenModalEditContact(false);
  }

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));

    if (savedContacts) {
      setContacts(savedContacts);
    } else {
      apiContact.getContacts().then(receivedСontacts => {
        setContacts(receivedСontacts);
        localStorage.setItem("contacts", JSON.stringify(receivedСontacts));
      }).catch(err => console.log(err))
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Main contacts={contacts} onClickEditButton={onClickEditButton} />
      <ModalEditContact updateDataContact={updateDataContact} isOpen={isOpenModalEditContact} onClose={closeModal} card={currentDataContact}/>
    </div>
  );
}

export default App;
