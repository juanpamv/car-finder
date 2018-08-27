import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

import Subtitle from "./../components/ui/Subtitle";
import FilterMenu from "./../components/FilterMenu";

class Filter extends React.Component {
    render() {
        /** Brands | set brands unique keys array from cars array brands */
        const brands = [...new Set(this.props.cars.map(car => car.brand))];
        return (
            <Grid fluid className="filter">
                <Row>
                    <Col xs={12}>
                        <Subtitle text={"¿What do you need?"} />
                        <p>
                            Select your what you want to see by brand, type,
                            price or search for and specific model or brand.
                        </p>
                        <FilterMenu
                            brands={brands}
                            cars={this.props.cars}
                            updateFilter={this.props.updateFilter}
                            filter={this.props.filter}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

Filter.propTypes = {
    cars: PropTypes.array,
    filter: PropTypes.object,
    updateFilter: PropTypes.func
};

export default Filter;
