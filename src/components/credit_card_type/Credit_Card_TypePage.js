import PageTemplate from "../templates/Template";
import Credit_Card_TypeTable from "./Credit_Card_TypeTable";
import React from "react";

const Credit_Card_TypePage = (props) => {
    return(
    <PageTemplate title="Credit_Card_Type List">
        <Credit_Card_TypeTable/>
    </PageTemplate>)
}
export default Credit_Card_TypePage;
