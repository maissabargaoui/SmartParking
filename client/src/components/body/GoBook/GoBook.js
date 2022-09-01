import React from "react";
import { Row, Col} from "reactstrap";

import {Link} from 'react-router-dom'


import './GoBook.css';

function GoBook() {

  return (
    <div>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
            If you're looking for great pizza
            <i className="fas fa-pizza-slice pizza-slice"></i>
          </p>
          <Link to="/Book" className="book-table-btn">Book a table</Link>
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

export default GoBook
