import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import Car from "./Car";

/**
 * Brand component - Display Brand title and load Individual Car Thumbs
 */
const Brand = props => {
    /** Cars | Cars to display per brand */
    const cars = props.cars
        /** filter cars that match Brand */
        .filter(car => car.brand === props.title)
        /** filter cars that match filter.type */
        .filter(car => {
            if (!props.filter.type) {
                return car;
            } else if (props.filter.type === car.type) {
                return car;
            }
        })
        /** filter cars that match filter.price */
        .filter(car => {
            if (!props.filter.price) {
                return car;
            } else if (
                parseInt(
                    props.filter.price.replace(/\$/g, "").split(" - ")[0]
                ) <= car.priceRange &&
                parseInt(
                    props.filter.price.replace(/\$/g, "").split(" - ")[1]
                ) >= car.priceRange
            ) {
                return car;
            }
        })
        /** filter cars that match Search input */
        .filter(car => {
            if (!props.filter.search) {
                return car;
            } else if (
                car.name
                    .toLowerCase()
                    .includes(props.filter.search.toLowerCase())
            ) {
                return car;
            }
        });

    return (
        <React.Fragment>
            {cars.length > 0 ? (
                <div className="brand">
                    <h4>{props.title}</h4>
                    <Row>
                        {cars.map((car, key) => (
                            <Car
                                car={car}
                                key={key}
                                filter={props.filter}
                                addComparative={props.addComparative}
                            />
                        ))}
                    </Row>
                </div>
            ) : (
                ""
            )}
        </React.Fragment>
    );
};

Brand.propTypes = {
    title: PropTypes.string,
    car: PropTypes.object,
    filter: PropTypes.object,
    addComparative: PropTypes.func
};

export default Brand;
