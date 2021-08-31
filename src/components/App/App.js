import './App.css';
import { useEffect } from 'react';
import Header from '../Header/Header.jsx';
import apiContact from '../../utils/apiContact';

function App() {
  useEffect(() => {
    apiContact.getContacts().then(data => {
      console.log(data);
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
