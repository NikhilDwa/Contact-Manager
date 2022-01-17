import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { Colors } from "../../config/colors";
import Button from "./button";

const ContactCard = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: Colors.white,
                    padding: "10px",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    marginTop: "5px",
                }}
            >
                <h5 className="me-2 mx-3">Name</h5>

                <div className="d-flex align-items-center mx-3 flex-wrap">
                    <BsTelephoneFill />
                    <span className="me-2 mx-2">9800000000</span>
                    <div className="d-flex align-items-center mx-2">
                        <AiOutlineMail />
                        <span className="mx-2">example@gmail.com</span>
                    </div>
                </div>
                <div className="d-flex align-items-center mx-3 flex-wrap">
                    <div className="d-flex align-items-center ">
                        <GoLocation />
                        <span className="mx-2">
                            Adarsha Colony, Budanilkantha
                        </span>
                    </div>
                </div>

                <div className=" d-flex my-2">
                    <Button
                        className="ms-3"
                        text="Edit"
                        borderColor="1px solid #515263"
                    />
                    <Button
                        className="ms-3"
                        text="Delete"
                        backgroundColor={Colors.red}
                        textColor="#fff"
                    />
                </div>
            </div>
        </>
    );
};

export default ContactCard;
