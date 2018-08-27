import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";
import Subtitle from "./ui/Subtitle";

/**
 * CarDescription component - Display Car Description on Single Car Page
 */
const CarDescription = props => (
    <Grid fluid className="filter">
        <Row>
            <Col xs={12} md={8} mdOffset={2}>
                <Subtitle text={"Desciption"} />
                <p>{props.description}</p>
            </Col>
        </Row>
    </Grid>
);

CarDescription.propTypes = {
    description: PropTypes.string
};

export default CarDescription;
