import React from "react";
import ContactCard from "./common/contactCard";
import Footer from "./footer";
import NavBar from "./navBar";

const Contacts = () => {
    return (
        <>
            <NavBar addContact />
            <ContactCard />
            <Footer />
        </>
    );
};

export default Contacts;
