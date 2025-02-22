import React from "react";

function ButtonComponent(props) {


    return (
        <div class="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" onClick={props.onClick} type="button">Stop</button>
        </div>
    )
}

export default ButtonComponent;