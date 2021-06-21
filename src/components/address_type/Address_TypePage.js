import PageTemplate from "../templates/Template";
import Address_TypeTable from "./Address_TypeTable";
import React from "react";

const Address_TypePage = (props) => {
    return(
    <PageTemplate title="Address_Type List">
        <Address_TypeTable/>
    </PageTemplate>)
}
export default Address_TypePage;
