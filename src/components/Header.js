import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Navbar } from "react-bootstrap";

/**
 * Header component - Contains Main Navigation of the page
 */
class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar inverse collapseOnSelect fixedTop fluid>
                    <Row>
                        <Col xs={12} md={10} mdOffset={1}>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <Link to="/">
                                        <img
                                            src="/images/car_finder_logo.svg"
                                            alt="Find your car logo"
                                            className="logo"
                                        />
                                    </Link>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <ul className="nav navbar-nav">
                                    <li role="presentation" className="">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li role="presentation" className="">
                                        <Link to="/compare">Compare</Link>
                                    </li>
                                </ul>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Navbar>
            </header>
        );
    }
}

export default Header;
