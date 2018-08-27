import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";
import Categorytitle from "./ui/CategoryTitle";
import Circle from "./ui/Circle";

/**
 * Design component - Display Available Colors on Single car page
 */
const Design = props => (
    <Grid fluid className="design">
        <Row>
            <Col xs={12} md={5} mdOffset={1} className="design__container">
                <Categorytitle text={"Design"} />
            </Col>
            <Col xs={12} md={5} className="design__colors">
                {props.colors.map((color, key) => (
                    <Circle color={color} key={key} />
                ))}
            </Col>
        </Row>
    </Grid>
);

Design.propTypes = {
    colors: PropTypes.array
};

export default Design;
