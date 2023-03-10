import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const ContactCards = ({ item, handleDelete, handleEdit }) => {
  return (
    <div className="m-3 text-center">
      <Card border="warning" style={{ width: "18rem" }} key={item.id}>
        <Card.Header className="h4">Contact</Card.Header>
        <Card.Body>
          <Card.Text className="h6">
            Name: <span className="h5">{item.name}</span>
          </Card.Text>
          <Card.Text className="h6">
            Surname: <span className="h5">{item.surname}</span>
          </Card.Text>
          <Card.Text className="h6">
            Phone number:{" "}
            <a href="#" className="h5 text-decoration-none">
              {item.phone}
            </a>
          </Card.Text>
          <Card.Text className="h6">
            Mail:{" "}
            <a href="#" className="h5 text-decoration-none">
              {item.mail}
            </a>
          </Card.Text>
          <Button
            className="me-3"
            onClick={() => handleDelete(item.id)}
            variant="primary"
          >
            Delete
          </Button>
          <Button onClick={() => handleEdit(item.id)} variant="dark">
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCards;
