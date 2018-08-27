import React from "react";
import PropTypes from "prop-types";
import Hero from "../components/Hero";
import Filter from "../containers/Filter";
import CarsGrid from "../components/CarsGrid";

/**
 * Home Page component - Loads all components requiered for this view
 */
class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <Hero
                    bgImage={"bg_cars_costa_rica-min.jpg"}
                    title={"FIND YOUR CAR"}
                    subtitle={"All you need to know about cars in Costa Rica"}
                    button={"Find your car now"}
                />
                <Filter
                    cars={this.props.cars}
                    updateFilter={this.props.updateFilter}
                    filter={this.props.filter}
                />
                <CarsGrid
                    cars={this.props.cars}
                    filter={this.props.filter}
                    addComparative={this.props.addComparative}
                />
            </React.Fragment>
        );
    }
}

Home.propTypes = {
    /** Cars contain all cars information (Prop from App.js state) */
    cars: PropTypes.array,
    /** Filter state (Prop from App.js state) */
    filter: PropTypes.object,
    /** updateFilter Add items to filter state (Prop from App.js) */
    updateFilter: PropTypes.func,
    /** addComparative Add items to comparative state (Prop from App.js) */
    addComparative: PropTypes.func
};

export default Home;
