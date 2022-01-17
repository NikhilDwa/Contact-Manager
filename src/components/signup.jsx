import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import { Colors } from "../config/colors";
import Button from "./common/button";
import Footer from "./footer";

class Signup extends Form {
    state = {
        data: {
            name: "",
            email: "",
            phone: "",
            password: "",
        },
        errors: {},
    };

    schema = {
        name: Joi.string().required().label("Name"),
        email: Joi.string().required().email().label("Email"),
        phone: Joi.string().length(10).required().label("Phone Number"),
        password: Joi.string().min(3).max(15).required(),
    };

    doSubmit = () => {
        // Call the server
        console.log("Submitted");
    };

    //Optimization
    styles = {
        headerSection: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    };
    formGroupClassName = "form-group p-1";

    render() {
        return (
            <div>
                <NavBar />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: Colors.white,
                        padding: "10px",
                        borderRadius: "5px",
                        marginBottom: "100px",
                    }}
                    className={`container mt-2 col-11 col-sm-8 col-md-6 col-lg-5`}
                >
                    <div style={this.styles.headerSection}>
                        <p
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                            }}
                        >
                            Signup
                        </p>
                        <Link
                            style={{
                                height: "100%",
                            }}
                            to="/"
                        >
                            <Button
                                text="Go Back"
                                borderColor="1px solid black"
                            />
                        </Link>
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput("name", "Name", "text", "Name")}

                            {this.renderInput(
                                "email",
                                "Email Address",
                                "email",
                                "example@gmail.com"
                            )}
                            {this.renderInput(
                                "phone",
                                "Phone Number",
                                "tel",
                                "9841000000"
                            )}
                            {this.renderInput(
                                "password",
                                "Password",
                                "password"
                            )}
                            <div className="p-2">
                                {this.renderButton("Signup")}
                                <p>
                                    Already have account?{" "}
                                    <a href="/login">Login</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Signup;
