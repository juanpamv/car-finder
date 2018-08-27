import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
/**
 * Alert component - Display Alert Messages on the page
 */
const AlertBlock = props => (
    <Alert bsStyle="info" className="alert">
        <p>
            <strong>{props.message}</strong>
        </p>
    </Alert>
);

AlertBlock.propTypes = {
    message: PropTypes.string
};

export default AlertBlock;
