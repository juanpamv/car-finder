import React from "react";
import PropTypes from "prop-types";
import { Row, Col, DropdownButton, MenuItem } from "react-bootstrap";
import FilterButton from "./ui/FilterButton";

/**
 * FilterMenu component - Contains Filter Menu Items
 */
class FilterMenu extends React.Component {
    state = {
        search: ""
    };
    handleUpdate = event => {
        event.preventDefault();
        if (!event.target.value) {
            this.setState({ search: "" });
        } else {
            this.setState({ search: event.target.value });
        }
        this.props.updateFilter("search", event.target.value);
    };
    render() {
        /** types | Define car types for filter */
        const types = ["Hatchback", "Sedan", "4x4"];

        /** types | Define car priceRanges for filter */
        const priceRanges = [
            "0 - $30000",
            "$30000 - $40000",
            "$40000 - $50000",
            "$50000 - $60000",
            "$60000 - $70000"
        ];
        return (
            <Row>
                <Col xs={12} md={2} mdOffset={2}>
                    <FilterButton
                        title={"Brand"}
                        items={this.props.brands}
                        updateFilter={this.props.updateFilter}
                        filter={this.props.filter.brand}
                    />
                </Col>
                <Col xs={12} md={2}>
                    <FilterButton
                        title={"Type"}
                        items={types}
                        updateFilter={this.props.updateFilter}
                        filter={this.props.filter.type}
                    />
                </Col>
                <Col xs={12} md={2}>
                    <FilterButton
                        title={"Price"}
                        items={priceRanges}
                        updateFilter={this.props.updateFilter}
                        filter={this.props.filter.price}
                    />
                </Col>
                <Col xs={12} md={2}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.search}
                        onChange={this.handleUpdate}
                    />
                </Col>
            </Row>
        );
    }
}

FilterMenu.propTypes = {
    brands: PropTypes.array,
    cars: PropTypes.array,
    filter: PropTypes.object,
    updateFilter: PropTypes.func
};

export default FilterMenu;
