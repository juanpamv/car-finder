import React from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class FilterButton extends React.Component {
    handleClick = event => {
        const val =
            event.target.innerHTML === "Clear Filter"
                ? ""
                : event.target.innerHTML;
        const buttonType = this.props.title.toLowerCase();

        this.props.updateFilter(buttonType, val);
    };
    render() {
        return (
            <DropdownButton
                title={
                    this.props.filter === ""
                        ? this.props.title
                        : this.props.filter
                }
            >
                <MenuItem eventKey={-1} onClick={this.handleClick}>
                    Clear Filter
                </MenuItem>
                {this.props.items.map((item, key) => (
                    <MenuItem
                        eventKey={key}
                        onClick={this.handleClick}
                        key={key}
                    >
                        {item}
                    </MenuItem>
                ))}
            </DropdownButton>
        );
    }
}

export default FilterButton;
