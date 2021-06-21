import PageTemplate from "../templates/Template";
import Price_TypeTable from "./Price_TypeTable";
import React from "react";

const Price_TypePage = (props) => {
    return(
    <PageTemplate title="Price_Type List">
        <Price_TypeTable/>
    </PageTemplate>)
}
export default Price_TypePage;
