import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";
import Extra from "./ui/Extra";
import Categorytitle from "./ui/CategoryTitle";

/**
 * Extras component - Display Extras Item on Single car page
 */
const Extras = props => (
    <Grid fluid className="extras">
        <Row>
            <Col xs={12} md={10} mdOffset={1}>
                <Categorytitle text={"Extras"} />
            </Col>
            <Col xs={12} md={10} mdOffset={1}>
                <Row>
                    {props.extras.map((extra, key) => (
                        <Extra text={extra} key={key} />
                    ))}
                </Row>
            </Col>
        </Row>
    </Grid>
);

Extras.propTypes = {
    extras: PropTypes.array
};

export default Extras;
