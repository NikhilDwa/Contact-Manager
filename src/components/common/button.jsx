import React from "react";

const Button = ({
    className,
    borderColor = "",
    backgroundColor,
    textColor = "#000",
    text,
}) => {
    return (
        <button
            style={{
                borderRadius: "3.7vw",
                fontWeight: "bold",
                backgroundColor: backgroundColor,
                color: textColor,
                border: borderColor,
                whiteSpace: "nowrap",
                height: "100%",
            }}
            className={`btn btn-responsive ${className}`}
            type="submit"
        >
            {text}
        </button>
    );
};

export default Button;
