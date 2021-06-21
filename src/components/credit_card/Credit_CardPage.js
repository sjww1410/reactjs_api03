import PageTemplate from "../templates/Template";
import Credit_CardTable from "./Credit_CardTable";
import React from "react";

const Credit_CardPage = (props) => {
    return(
    <PageTemplate title="Credit_Card List">
        <Credit_CardTable/>
    </PageTemplate>)
}
export default Credit_CardPage;
