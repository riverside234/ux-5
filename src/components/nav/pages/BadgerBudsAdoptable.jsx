import { useContext, useState } from "react";

import BadgerBudSummary from "./BadgerBudSummary";
import { BadgerBudsDataContext } from "../../../contexts/BadgerBudsDataContext";
import { Container, Row, Col } from "react-bootstrap";

export default function BadgerBudsAdoptable(props) {
  const data = useContext(BadgerBudsDataContext);

  const [check, setCheck] = useState(true);
  const functionCheckSave = (id) => {
    let saveCurr = JSON.parse(sessionStorage.getItem("saveCard"))
      ? JSON.parse(sessionStorage.getItem("saveCard"))
      : sessionStorage.setItem("saveCard", JSON.stringify({}));
    saveCurr[id] = id;
    sessionStorage.setItem("saveCard", JSON.stringify(saveCurr));

    setCheck(!check);
  };

  let saveCard = JSON.parse(sessionStorage.getItem("saveCard"))
    ? JSON.parse(sessionStorage.getItem("saveCard"))
    : sessionStorage.setItem("saveCard", JSON.stringify({}));

  let adoptCat = JSON.parse(sessionStorage.getItem("adoptedCatIds"))
    ? JSON.parse(sessionStorage.getItem("adoptedCatIds"))
    : sessionStorage.setItem("adoptedCatIds", JSON.stringify({}));

  return (
    <div>
      <h1>Available Badger Buds</h1>
      <p>The following cats are looking for a loving home! Could you help?</p>
      {Object.keys(saveCard).length ===
      data.length - Object.keys(adoptCat).length ? (
        <p>No buds are available for adoption!</p>
      ) : (
        <></>
      )}
      <Container fluid>
        <Row>
          {data
            .filter((data) => {
              return !(data.id in saveCard) && !(data.id in adoptCat);
            })
            .map((data) => {
              return (
                <Col key={data.id} xs={12} sm={12} md={6} lg={4} xl={3}>
                  <BadgerBudSummary
                    pictureID={data.imgIds}
                    name={data.name}
                    description={data.description}
                    gender={data.gender}
                    breed={data.breed}
                    age={data.age}
                    checkAdoptable={functionCheckSave}
                    id={data.id}
                  ></BadgerBudSummary>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
