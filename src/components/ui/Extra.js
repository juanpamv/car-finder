import React from "react";
import { Col } from "react-bootstrap";

const Extra = props => (
    <Col xs={12} md={4}>
        <p>{props.text}</p>
    </Col>
);

export default Extra;
