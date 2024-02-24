import { useContext, useState } from "react";
import BasketButton from "./BasketButton";
import { BadgerBudsDataContext } from "../../../contexts/BadgerBudsDataContext";
import { Container, Row, Col } from "react-bootstrap";

export default function BadgerBudsBasket(props) {
  const data = useContext(BadgerBudsDataContext);

  const [checkUnselect, setCheckUnselect] = useState(true);
  const functionCheckUnselect = (id) => {
    let unselect = JSON.parse(sessionStorage.getItem("saveCard"))
      ? JSON.parse(sessionStorage.getItem("saveCard"))
      : sessionStorage.setItem("saveCard", JSON.stringify({}));
    delete unselect[id];
    sessionStorage.setItem("saveCard", JSON.stringify(unselect));

    setCheckUnselect(!checkUnselect);
  };

  const adopt = (id) => {
    let remove = JSON.parse(sessionStorage.getItem("saveCard"))
      ? JSON.parse(sessionStorage.getItem("saveCard"))
      : sessionStorage.setItem("saveCard", JSON.stringify({}));
    delete remove[id];
    sessionStorage.setItem("saveCard", JSON.stringify(remove));

    let adopt = JSON.parse(sessionStorage.getItem("adoptedCatIds"))
      ? JSON.parse(sessionStorage.getItem("adoptedCatIds"))
      : sessionStorage.setItem("adoptedCatIds", JSON.stringify({}));
    adopt[id] = id;
    sessionStorage.setItem("adoptedCatIds", JSON.stringify(adopt));

    setCheckUnselect(!checkUnselect);
  };

  let saveCard = JSON.parse(sessionStorage.getItem("saveCard"))
    ? JSON.parse(sessionStorage.getItem("saveCard"))
    : sessionStorage.setItem("saveCard", JSON.stringify({}));

  let adoptCat = JSON.parse(sessionStorage.getItem("adoptedCatIds"))
    ? JSON.parse(sessionStorage.getItem("adoptedCatIds"))
    : sessionStorage.setItem("adoptedCatIds", JSON.stringify({}));

  return (
    <div>
      <h1>Badger Buds Basket</h1>
      <p>These cute cats could be all yours!</p>
      {Object.keys(saveCard).length === 0 ? (
        <p>No buds are available for adoption!</p>
      ) : (
        <></>
      )}
      <Container fluid>
        <Row>
          {data
            .filter((data) => {
              return data.id in saveCard && !(data.id in adoptCat);
            })
            .map((data) => {
              return (
                <Col key={data.id} xs={12} sm={12} md={6} lg={4} xl={3}>
                  <BasketButton
                    pictureID={data.imgIds}
                    name={data.name}
                    description={data.description}
                    gender={data.gender}
                    breed={data.breed}
                    age={data.age}
                    id={data.id}
                    checkUnselect={functionCheckUnselect}
                    adopt={adopt}
                  ></BasketButton>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
