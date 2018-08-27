import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

/**
 * Car component - Display Car thumb and data on brand - Grid
 */
class Car extends React.Component {
    compativeClick = event => {
        event.preventDefault();
        const newCC = event.target.name;
        this.props.addComparative(newCC);
    };
    render() {
        return (
            <Col xs={12} md={4} lg={3}>
                <div className="car">
                    <img
                        src={`images/${this.props.car.brand.toLowerCase()}/${
                            this.props.car.gridImage
                        }`}
                        alt=""
                        className="img-responsive"
                    />
                    <div className="car__content">
                        <p className="car__title">{this.props.car.name}</p>
                        <p>${this.props.car.priceRange}</p>
                    </div>
                    <div className="car__content--button-container">
                        <button
                            className="car__content__button"
                            onClick={this.compativeClick}
                            name={this.props.car.name}
                        >
                            VS / VS
                        </button>
                        <Link
                            to={`/car/${this.props.car.name.replace(" ", "-")}`}
                            className="car__content__button"
                        >
                            More
                        </Link>
                    </div>
                </div>
            </Col>
        );
    }
}

Car.propTypes = {
    cars: PropTypes.array,
    filter: PropTypes.object,
    addComparative: PropTypes.func
};

export default Car;
