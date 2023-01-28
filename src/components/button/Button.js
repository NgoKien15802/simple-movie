import React from "react";

const Button = ({
    className,
    onClick,
    color = "primary",
    full = false,
    children,
    disibled = false,
}) => {
    let bgColor = "bg-primary";
    switch (color) {
        case "primary":
            bgColor = "bg-primary";
            break;
        case "secondary":
            bgColor = "bg-secondary";
            break;

        case "transparent":
            bgColor = "bg-transparent";
            break;
        default:
            break;
    }
    return (
        <button
            onClick={onClick}
            disabled={disibled}
            className={`${className} ${
                full ? "w-full" : ""
            } px-6 py-3 mt-auto capitalize rounded-lg  ${bgColor}`}
        >
            {children}
        </button>
    );
};

export default Button;
