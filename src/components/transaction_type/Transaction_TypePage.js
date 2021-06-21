import PageTemplate from "../templates/Template";
import Transaction_TypeTable from "./Transaction_TypeTable";
import React from "react";

const Transaction_TypePage = (props) => {
    return(
    <PageTemplate title="Transaction_Type List">
        <Transaction_TypeTable/>
    </PageTemplate>)
}
export default Transaction_TypePage;
