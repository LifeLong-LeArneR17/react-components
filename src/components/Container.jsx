import React from "react";
import PropTypes from "prop-types";
const StyleCss = {
    width: "1280px",
            maxWidth: "100%",
            padding: "0 15px",
}
export const Container = (props) => {
    return (
    <div style = {
        StyleCss      
    }>{props.children}</div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
}


