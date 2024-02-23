import { Button, Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function BadgerBudSummary(props) {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow((old) => !old);
  };

  let age = props.age;
  let year = 0;
  let month = age;

  function checkAge() {
    if (age >= 12) {
      year = Math.floor(age / 12);
      month = age % 12;
    }

    if (year > 0 && month > 0) {
      return (
        <p>
          {String(year)} year(s) and {String(month)} month(s) old
        </p>
      );
    } else if (year > 0) {
      return <p>{String(year)} year(s) old</p>;
    } else if (month > 0) {
      return (
        <p>
          <p>{String(month)} month(s) old</p>
        </p>
      );
    }
  }

  return (
    <div>
      <Card style={{ width: "20rem" }} className="my-3">
        <Card.Img
          src={
            "https://raw.githubusercontent.com/CS571-F23/hw5-api-static-content/main/cats/" +
            props.pictureID[0]
          }
          style={{ borderRadius: "6px" }}
          variant="top"
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>

          {show ? (
            <></>
          ) : (
            <div>
              <p>{props.gender}</p>
              <p>{props.breed}</p>
              {checkAge()}
              <p>{props.description}</p>
            </div>
          )}
        </Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item style={{ backgroundColor: "#f0f0f0" }}>
            <Button onClick={handleShow}>
              {show ? "Show More" : "Show less"}
            </Button>
            {"  "}{" "}
            <Button variant="secondary">
              {" "}
              <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> Save
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
