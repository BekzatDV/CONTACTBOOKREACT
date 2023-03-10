import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Contacts = ({ show, handleClose, handleAddContacts }) => {
  //States for inputs
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  //States for inputs

  function handleAdd() {
    if (!name || !surname || !phone || !mail) {
      alert("Missing information");
      return;
    }
    let newObj = {
      name,
      surname,
      phone,
      mail,
      id: Date.now(),
    };
    handleAddContacts(newObj);
    setName("");
    setSurname("");
    setPhone("");
    setMail("");
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form">
          <FormControl
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="my-3"
            placeholder="Name"
          />
          <FormControl
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            className="my-3"
            placeholder="Surname"
          />
          <FormControl
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="my-3"
            placeholder="Phone number"
          />
          <FormControl
            onChange={(e) => {
              setMail(e.target.value);
            }}
            className="my-3"
            placeholder="Mail@"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Contacts;
