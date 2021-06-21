import PageTemplate from "../templates/Template";
import TransactionTable from "./TransactionTable";
import React from "react";

const TransactionPage = (props) => {
    return(
    <PageTemplate title="Transaction List">
        <TransactionTable/>
    </PageTemplate>)
}
export default TransactionPage;
