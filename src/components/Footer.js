import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * Footer component - Contains Footer of the page
 */
class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Grid fluid>
                    <Row>
                        <Col
                            xs={12}
                            md={3}
                            mdOffset={1}
                            className="footer__logo"
                        >
                            <a href="/">
                                <img
                                    src="/images/car_finder_logo.svg"
                                    alt="Find your car logo"
                                    className="logo"
                                />
                            </a>
                        </Col>
                        <Col xs={12} md={7} className="footer__menu">
                            <ul>
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/compare"}>Comparative</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} className="footer__rights">
                            <p>Find your car 2018. All rights reserved.</p>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        );
    }
}

export default Footer;
