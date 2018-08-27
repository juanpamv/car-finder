import React from "react";
import PropTypes from "prop-types";
import Hero from "../components/Hero";
import InteriorImage from "../components/ui/InteriorImage";
import CarDescription from "../components/CarDescription";
import Design from "../components/Design";
import Motor from "../components/Motor";
import Extras from "../components/Extras";

/**
 * Single car page component - Loads all components requiered for this view
 */
class SingleCar extends React.Component {
    render() {
        /** carName | take car from url carId */
        const carName = this.props.match.params.carId;

        /** car | take car object from cars props */
        const car = this.props.cars[
            this.props.cars.findIndex(
                car => car.name === carName.replace("-", " ")
            )
        ];
        return (
            <React.Fragment>
                <Hero
                    bgImage={`${car.brand.toLowerCase()}/${car.heroImage}`}
                    title={`${car.brand} ${car.name}`}
                    subtitle={"All you need to know about this car…"}
                    button={"Find more"}
                />
                <CarDescription description={car.description} />
                <Design colors={car.colors} />
                <Motor
                    motor={car.motor.motor}
                    hp={car.motor.hp}
                    acceleration={car.motor.acceleration}
                />
                <InteriorImage
                    bgImage={`${car.brand.toLowerCase()}/${car.interiorImage}`}
                />
                <Extras extras={car.extras} />
            </React.Fragment>
        );
    }
}

SingleCar.propTypes = {
    /** Cars contain all cars information (Prop from App.js state) */
    cars: PropTypes.array
};

export default SingleCar;
