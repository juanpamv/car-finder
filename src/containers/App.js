import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./../components/Header";
import Alert from "./../components/Alert";
import Footer from "./../components/Footer";
import Home from "./../containers/Home";
import SingleCar from "./../containers/SingleCar";
import Comparative from "./../containers/Comparative";
import NotFound from "./../components/NotFound";

// Import Cars data from Json File
import Cars from "./../data/cars";

class App extends React.Component {
    state = {
        cars: [],
        alert: {
            message: "The car was added to the comparative section",
            show: false
        },
        filter: {
            brand: "",
            type: "",
            price: "",
            search: ""
        },
        comparative: []
    };
    componentDidMount() {
        this.setState({
            cars: Cars
        });
    }
    // Import Cars data from Json File
    updateFilter = (buttonType, val) => {
        const filter = { ...this.state.filter, [buttonType]: val };

        this.setState({
            filter: {
                ...filter
            }
        });
    };
    addComparative = item => {
        if (this.state.comparative.length < 3) {
            const newCC = this.state.cars.filter(car => car.name === item);
            const comparative = [...this.state.comparative, ...newCC];

            this.setState({
                alert: {
                    message: "The car was added to the comparative section",
                    show: true
                },
                comparative: [...comparative]
            });

            setTimeout(() => {
                this.setState({
                    alert: {
                        message: "The car was added to the comparative section",
                        show: false
                    }
                });
            }, 3000);
        } else {
            this.setState({
                alert: {
                    message: "You can only compare 3 cars per time.",
                    show: true
                }
            });

            setTimeout(() => {
                this.setState({
                    alert: {
                        message: "The car was added to the comparative section",
                        show: false
                    }
                });
            }, 3000);
        }
    };
    removeComparative = item => {
        const removeItem = this.state.comparative.findIndex(
            car => car.name === item
        );
        const comparative = [...this.state.comparative];

        comparative.splice(removeItem, 1);

        this.setState({
            comparative: [...comparative]
        });
    };

    render() {
        return (
            <React.Fragment>
                <Header />
                {this.state.alert.show ? (
                    <Alert message={this.state.alert.message} />
                ) : (
                    ""
                )}
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <Home
                                cars={this.state.cars}
                                filter={this.state.filter}
                                updateFilter={this.updateFilter}
                                addComparative={this.addComparative}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        path="/car/:carId"
                        render={props => (
                            <SingleCar cars={this.state.cars} {...props} />
                        )}
                    />
                    <Route
                        path="/compare"
                        render={props => (
                            <Comparative
                                cars={this.state.comparative}
                                removeComparative={this.removeComparative}
                                {...props}
                            />
                        )}
                    />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
