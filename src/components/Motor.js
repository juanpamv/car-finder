import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";
import Categorytitle from "./ui/CategoryTitle";

/**
 * Motor component - Display motor information on Single Car Page
 */
const Motor = props => (
    <Grid fluid className="motor">
        <Row>
            <Col xs={12} md={10} mdOffset={1} className="motor__content">
                <Categorytitle text={"Motor"} />
            </Col>
            <Col xs={12} md={10} mdOffset={1}>
                <ul className="motor__details">
                    <li>
                        <strong>Motor:</strong> {props.motor} CC
                    </li>
                    <li>
                        <strong>HP:</strong> {props.hp}
                    </li>
                    <li>
                        <strong>Acceleration:</strong> 0 to 100 in{" "}
                        {props.acceleration} s
                    </li>
                </ul>
            </Col>
        </Row>
    </Grid>
);

Motor.propTypes = {
    /** Motor contain motor information (Prop from car, App.jsCar state) */
    motor: PropTypes.string,
    /** hp contain motor information (Prop from car, App.jsCar state) */
    hp: PropTypes.string,
    /** accelerations contain motor information (Prop from car, App.jsCar state) */
    acceleration: PropTypes.string
};

export default Motor;
