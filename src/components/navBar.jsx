import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../config/colors";
const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-white justify-content-between px-5">
            <Link className="navbar-brand" to="/">
                <div
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: "2rem",
                        color: Colors.primary,
                    }}
                >
                    Contact Manager
                </div>
            </Link>
        </nav>
    );
};

export default NavBar;
