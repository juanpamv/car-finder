import React from "react";
import PropTypes from "prop-types";
import { Grid } from "react-bootstrap";
import Button from "./ui/Button";

/**
 * Hero component - Display Hero image on pages
 */
class Hero extends React.Component {
    render() {
        return (
            <Grid
                fluid={true}
                className="hero"
                style={{
                    backgroundImage: `url(/images/${this.props.bgImage})`
                }}
            >
                <div className="hero__content">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                    <Button text={this.props.button} />
                </div>
                <img
                    src="/images/scroll-down-icon.svg"
                    className="hero__scroll-down"
                    alt="Scroll down icon"
                />
            </Grid>
        );
    }
}

Hero.propTypes = {
    bgImage: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.string
};

export default Hero;
