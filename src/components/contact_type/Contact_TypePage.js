import PageTemplate from "../templates/Template";
import Contact_TypeTable from "./Contact_TypeTable";
import React from "react";

const Contact_TypePage = (props) => {
    return(
    <PageTemplate title="Contact_Type List">
        <Contact_TypeTable/>
    </PageTemplate>)
}
export default Contact_TypePage;
