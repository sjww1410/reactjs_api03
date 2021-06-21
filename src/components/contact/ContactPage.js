import PageTemplate from "../templates/Template";
import ContactTable from "./ContactTable";
import React from "react";

const ContactPage = (props) => {
    return(
    <PageTemplate title="Contact List">
        <ContactTable/>
    </PageTemplate>)
}
export default ContactPage;
