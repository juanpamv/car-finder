import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

/**
 * ComparativeCar component - Display individual car information on copmparative page
 */
class ComparativeCar extends React.Component {
    removeButtonClick = event => {
        event.preventDefault();
        const car = event.target.name;
        this.props.removeComparative(car);
    };
    render() {
        return (
            <Col xs={12} md={4} lg={4}>
                <div className="comparative-car">
                    <button
                        className="comparative-car__close"
                        onClick={this.removeButtonClick}
                        name={this.props.car.name}
                    >
                        x
                    </button>
                    <img
                        src={`images/${this.props.car.brand.toLowerCase()}/${
                            this.props.car.gridImage
                        }`}
                        alt=""
                        className="img-responsive"
                    />
                    <div className="comparative-car__content">
                        <p className="comparative-car__title">{`${
                            this.props.car.brand
                        } ${this.props.car.name}`}</p>
                        <p>
                            <strong>Price:</strong> ${this.props.car.priceRange}
                        </p>
                        <p>
                            <strong>Type:</strong> ${this.props.car.type}
                        </p>
                        <hr />
                        <p>
                            <strong>Motor:</strong> {this.props.car.motor.motor}{" "}
                            CC
                        </p>
                        <p>
                            <strong>HP:</strong> {this.props.car.motor.hp}
                        </p>
                        <p>
                            <strong>Acceleration:</strong>{" "}
                            {this.props.car.motor.acceleration}
                        </p>
                        <hr />
                        <p>
                            <strong>Extras:</strong>{" "}
                        </p>
                        <ul>
                            {this.props.car.extras.map((extra, key) => (
                                <li key={key}>- {extra}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Col>
        );
    }
}

ComparativeCar.propTypes = {
    optionalArray: PropTypes.obj
};

export default ComparativeCar;
