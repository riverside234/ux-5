import { useContext } from "react";
import BadgerBudSummary from "./BadgerBudSummary";
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import { Container, Row, Col } from "react-bootstrap";

export default function BadgerBudsAdoptable(props) {
  const data = useContext(BadgerBudsDataContext);
  return (
    <div>
      <h1>Available Badger Buds</h1>
      <p>The following cats are looking for a loving home! Could you help?</p>
      <Container fluid>
        <Row>
          {data.map((data) => {
            return (
              <Col key={data.id} xs={12} sm={12} md={6} lg={4} xl={3}>
                <BadgerBudSummary
                  pictureID={data.imgIds}
                  name={data.name}
                  description={data.description}
                  gender={data.gender}
                  breed={data.breed}
                  age={data.age}
                ></BadgerBudSummary>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
