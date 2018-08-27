import React from "react";

const InteriorImage = props => (
    <div
        className="interior-image"
        style={{
            backgroundImage: `url(/images/${props.bgImage})`
        }}
    />
);

export default InteriorImage;
