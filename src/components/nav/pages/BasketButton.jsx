import { Button, Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";

export default function BasketButton(props) {
  const handleUnselect = () => {
    props.checkUnselect(props.id);
    alert(props.name + " has been removed from your basket!");
  };

  const adopted = () => {
    props.adopt(props.id);
    alert(props.name + " has been adopted!");
  };

  return (
    <div>
      <Card style={{ width: "20rem" }} className="my-3">
        <Card.Img
          src={
            "https://raw.githubusercontent.com/CS571-F23/hw5-api-static-content/main/cats/" +
            props.pictureID[0]
          }
          style={{ borderRadius: "6px", aspectRatio: "1 / 1" }}
          variant="top"
          alt="car"
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item style={{ backgroundColor: "#f0f0f0" }}>
            <Button onClick={handleUnselect} variant="secondary ">
              Unselect
            </Button>
            {"  "}{" "}
            <Button variant="success " onClick={adopted}>
              {" "}
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  color: "red",
                  position: "relative",
                  left: 0,
                  top: 0,
                  fontSize: "0.8rem",
                }}
              />
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  color: "red",
                  position: "relative",
                  left: "1px",
                  top: "-7px",
                  fontSize: "0.5rem",
                }}
              />{" "}
              Adopt
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
