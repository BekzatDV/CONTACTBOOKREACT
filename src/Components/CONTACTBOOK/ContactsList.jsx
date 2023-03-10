import React from "react";
import ContactCards from "./ContactCards";

const ContactsList = ({ contacts, handleDelete, handleEdit }) => {
  return (
    <div>
      <center style={{ fontSize: "30px", margin: "40px" }}>CONTACTS</center>
      <div className=" d-flex justify-content-between flex-wrap w-75 m-auto ">
        {contacts.map((item) => (
          <ContactCards
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
