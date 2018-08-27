import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";
import Categorytitle from "./../components/ui/CategoryTitle";
import ComparativeCar from "./../components/CompativeCar";

/**
 * Car comparative page component - Loads all components requiered for this view
 */
class Comparative extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid fluid className="comparative">
                    <Row>
                        <Col
                            xs={12}
                            md={10}
                            mdOffset={1}
                            className="comparative__title"
                        >
                            <Categorytitle text={"Comparative"} />
                        </Col>
                        <Col
                            xs={12}
                            md={10}
                            mdOffset={1}
                            className="comparative__content"
                        >
                            {this.props.cars.length > 0 ? (
                                <Row>
                                    {this.props.cars.map((car, key) => (
                                        <ComparativeCar
                                            car={car}
                                            key={key}
                                            removeComparative={
                                                this.props.removeComparative
                                            }
                                        />
                                    ))}
                                </Row>
                            ) : (
                                <p>
                                    <strong>
                                        You haven't selected any car to compare.
                                    </strong>
                                </p>
                            )}
                        </Col>
                    </Row>
                </Grid>
            </React.Fragment>
        );
    }
}

Comparative.propTypes = {
    /** Cars contain all cars information (Prop from App.js state) */
    cars: PropTypes.array,
    /** removeComparative remove items on comparative state (Prop from App.js) */
    removeComparative: PropTypes.func
};

export default Comparative;
