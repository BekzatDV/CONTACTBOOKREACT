import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./Components/NAVBAR/Navbar";
import Contacts from "./Components/CONTACTBOOK/Contacts";
import ContactsList from "./Components/CONTACTBOOK/ContactsList";
import ContactEdit from "./Components/CONTACTBOOK/ContactEdit";

const App = () => {
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // modal

  // contacts
  const [contacts, setContacts] = useState([]);

  //! Creating
  function handleAddContacts(newObj) {
    let newContacts = [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts);
  }

  //! Deleting

  function handleDelete(id) {
    let newContacts = contacts.filter((item) => item.id !== id);
    setContacts(newContacts);
  }

  //! Editing
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [editContact, setEditContact] = useState({});

  function handleEdit(id) {
    let array = contacts.filter((item) => item.id == id);
    setEditContact(array[0]);
    handleEditShow();
  }

  function handleSave(editedObj) {
    let newCantact = contacts.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      }
      return item;
    });
    setContacts(newCantact);
    setShowEditModal(false);
  }
  // contacts

  return (
    <div>
      <MainNavbar handleShow={handleShow} />
      <Contacts
        show={show}
        handleAddContacts={handleAddContacts}
        handleClose={handleClose}
      />
      <ContactsList
        handleDelete={handleDelete}
        contacts={contacts}
        handleEdit={handleEdit}
      />
      <ContactEdit
        showEditModal={showEditModal}
        editContact={editContact}
        handleEditShow={handleEditShow}
        handleEditClose={handleEditClose}
        handleSave={handleSave}
      />
    </div>
  );
};

export default App;
