import "./ModalEditContact.css";
import { useState, useEffect } from "react";

function ModalEditContact({ isOpen, onClose, card, updateDataContact }) {
  const [dataContact, setDataContact] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    company: "",
    city: "",
    id: "",
    favorite: false,
  });

  useEffect(() => {
    setDataContact({
      name: card.name,
      phone: card.phone,
      email: card.email,
      website: card.website,
      company: card.company,
      city: card.city,
      id: card.id,
      favorite: card.favorite,
    });
  }, [card]);

  const handleChangeInput = (e) => {
    setDataContact({
      ...dataContact,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    updateDataContact(dataContact);
  }

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">Edit contact</h2>
        <form action="#" name="modal-form" onSubmit={handleSubmit}>
          <p className="modal__name-input">Name</p>
          <input
            type="text"
            name="name"
            className="modal__item"
            placeholder="Name"
            value={dataContact.name}
            onChange={handleChangeInput}
            minLength={1}
            maxLength={50}
            required
          />
          <p className="modal__name-input">📞 Phone</p>
          <input
            type="tel"
            name="phone"
            className="modal__item"
            placeholder="Phone"
            value={dataContact.phone}
            onChange={handleChangeInput}
            minLength={8}
            required
          />
          <p className="modal__name-input">📧 Email</p>
          <input
            type="email"
            name="email"
            className="modal__item"
            placeholder="Email"
            value={dataContact.email}
            onChange={handleChangeInput}
            minLength={4}
            required
          />
          <p className="modal__name-input">🌐 Website</p>
          <input
            type="text"
            name="website"
            className="modal__item"
            placeholder="Website"
            value={dataContact.website}
            onChange={handleChangeInput}
            minLength={4}
            maxLength={50}
            required
          />
          <p className="modal__name-input">💼 Company</p>
          <input
            type="text"
            name="company"
            className="modal__item"
            placeholder="Company"
            value={dataContact.company}
            onChange={handleChangeInput}
            minLength={1}
            maxLength={50}
            required
          />
          <p className="modal__name-input">🏠 City</p>
          <input
            type="text"
            name="city"
            className="modal__item"
            placeholder="City"
            value={dataContact.city}
            onChange={handleChangeInput}
            minLength={1}
            maxLength={20}
            required
          />
          <button type="submit" className="modal__save-button">
            Save
          </button>
        </form>
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ModalEditContact;
