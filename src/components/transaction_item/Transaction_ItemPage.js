import PageTemplate from "../templates/Template";
import Transaction_ItemTable from "./Transaction_ItemTable";
import React from "react";

const Transaction_ItemPage = (props) => {
    return(
    <PageTemplate title="Transaction_Item List">
        <Transaction_ItemTable/>
    </PageTemplate>)
}
export default Transaction_ItemPage;
