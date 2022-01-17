import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../config/colors";
import Button from "../components/common/button";
const NavBar = ({ addContact }) => {
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
                {addContact && (
                    <Link
                        style={{
                            height: "100%",
                        }}
                        to="/addContactForm"
                    >
                        <Button
                            text="Add Contact"
                            borderColor="1px solid black"
                        />
                    </Link>
                )}
            </Link>
        </nav>
    );
};

export default NavBar;
