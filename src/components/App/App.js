import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import apiContact from '../../utils/apiContact';
import Main from '../Main/Main';

function App() {
  const [contacts, setContacts] = useState([]);

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
  }, [])

  return (
    <div className="App">
      <Header/>
      <Main contacts={contacts}/>
    </div>
  );
}

export default App;
