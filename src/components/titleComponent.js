import React from "react";

const TitleComponent = ({ title = '' }) => {
    return (
        <>
            <a href="/">Home</a>
            <h1 style={{ color: "white" }}>{title}</h1>
        </>
    );
};

export default TitleComponent;