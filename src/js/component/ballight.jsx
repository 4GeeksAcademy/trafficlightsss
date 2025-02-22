import React from "react";

function Ballight(props) {
    const defaultColor = "black";
    // Si trafficlight es true, usamos props.light; de lo contrario, defaultColor
    const currentColor = props.trafficlight ? props.light : defaultColor;

    return (
        <div className="d-flex justify-content-center" style={{ color: currentColor }} onClick={props.onClick}>
            <h1>
                <i className="fa fa-circle" aria-hidden="true"></i>
            </h1>
        </div>
    );
}

export default Ballight;
