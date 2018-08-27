import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
/**
 * Alert component - Display Alert Messages on the page
 */
const NotFound = props => (
    <Grid fluid>
        <Row>
            <Col>
                <h3>Page Not Found</h3>
            </Col>
        </Row>
    </Grid>
);

export default NotFound;
