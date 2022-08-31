import React from "react";
import { Row, Col, Button } from "reactstrap";


function Book() {

  return (
    <div>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
            If you're looking for great pizza
            <i className="fas fa-pizza-slice pizza-slice"></i>
          </p>
          <Button
            color="none"
            className="book-table-btn">
            Book a Table
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../assets/ai.png")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Book
