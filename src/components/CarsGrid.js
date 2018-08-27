import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";
import Brand from "./Brand";

/**
 * CarsGrid component - Contain all Brands and cars displayed on the grid
 */
class CarsGrid extends React.Component {
    render() {
        var brands;

        if (this.props.filter.brand === "") {
            /** brands | If filter is clear use all brands */
            brands = [...new Set(this.props.cars.map(car => car.brand))];
        } else {
            /** brands | If filter is filled match filter.brand */
            brands = this.props.cars.filter(
                car => car.brand === this.props.filter.brand
            );
            brands = [brands[0].brand];
        }

        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        {brands.map((brand, key) => (
                            <Brand
                                title={brand}
                                cars={this.props.cars}
                                key={key}
                                filter={this.props.filter}
                                addComparative={this.props.addComparative}
                            />
                        ))}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

CarsGrid.propTypes = {
    cars: PropTypes.array,
    filter: PropTypes.object,
    addComparative: PropTypes.func
};

export default CarsGrid;
